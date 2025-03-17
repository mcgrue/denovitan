# Read .gitignore patterns
$gitignorePatterns = @()
if (Test-Path ".gitignore") {
    $gitignorePatterns = Get-Content ".gitignore" | Where-Object { 
        # Skip empty lines and comments
        $_ -and -not $_.StartsWith("#")
    }
}

# Read .no-test.json patterns
$noTestPatterns = @()
if (Test-Path ".no-test.json") {
    $noTestPatterns = Get-Content ".no-test.json" | ConvertFrom-Json
}

# Convert .gitignore patterns to regex patterns
$regexPatterns = $gitignorePatterns | ForEach-Object {
    $pattern = $_.Trim()
    # Convert .gitignore pattern to regex
    $pattern = $pattern -replace '\.', '\.'  # Escape dots
    $pattern = $pattern -replace '\*', '.*'  # Convert * to .*
    $pattern = $pattern -replace '\?', '.'   # Convert ? to .
    # Handle directory indicators
    if ($pattern.EndsWith('/')) {
        $pattern = $pattern + '.*'
    }
    "^.*$pattern.*$"
}

# Find all .ts and .tsx files, excluding node_modules and dist
$files = Get-ChildItem -Recurse -Include "*.ts","*.tsx" -Exclude "*.test.ts","*.test.tsx" | 
    Where-Object { 
        $fullPath = $_.FullName
        $relativePath = $fullPath.Substring((Get-Location).Path.Length + 1)
        $relativePath = $relativePath -replace '\\', '/'  # Normalize path separators
        
        # Check if file matches any gitignore pattern
        $isIgnored = $false
        foreach ($pattern in $regexPatterns) {
            if ($relativePath -match $pattern) {
                $isIgnored = $true
                break
            }
        }
        
        # Check if file is in .no-test.json
        if (-not $isIgnored -and $noTestPatterns -contains $relativePath) {
            $isIgnored = $true
        }
        
        -not $isIgnored
    }

# Initialize array to store files missing tests
$missingTests = @()

# Check each file for a corresponding test file
foreach ($file in $files) {
    # Construct the expected test file path
    $testFile = $file.FullName -replace '\.([^.]+)$', '.test.$1'
    
    # Check if test file exists
    if (-not (Test-Path $testFile)) {
        $missingTests += $file.FullName
    }
}

# If any files are missing tests, print them all and exit with error
if ($missingTests.Count -gt 0) {
    Write-Host "The following files are missing test files:"
    foreach ($file in $missingTests) {
        Write-Host "  $file"
    }
    Write-Error "Please add test files for the above files."
    exit 1
}

Write-Output "All source files have corresponding test files"