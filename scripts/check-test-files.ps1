# Find all .ts and .tsx files, excluding node_modules and dist
$files = Get-ChildItem -Recurse -Include "*.ts","*.tsx" -Exclude "*.test.ts","*.test.tsx" | 
    Where-Object { 
        $_.FullName -notlike "*\node_modules\*" -and 
        $_.FullName -notlike "*\dist\*" 
    }

# Check each file for a corresponding test file
foreach ($file in $files) {
    # Construct the expected test file path
    $testFile = $file.FullName -replace '\.([^.]+)$', '.test.$1'
    
    # Check if test file exists
    if (-not (Test-Path $testFile)) {
        Write-Error "No test file found for $($file.FullName)"
        exit 1
    }
}

Write-Output "All source files have corresponding test files"