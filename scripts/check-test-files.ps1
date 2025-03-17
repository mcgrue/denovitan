# Find all .ts and .tsx files, excluding node_modules and dist
$files = Get-ChildItem -Recurse -Include "*.ts","*.tsx" -Exclude "*.test.ts","*.test.tsx" | 
    Where-Object { 
        $_.FullName -notlike "*\node_modules\*" -and 
        $_.FullName -notlike "*\dist\*" 
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