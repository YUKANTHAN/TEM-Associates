param(
    [string]$UrlFile = "reference-urls.txt",
    [string]$OutDir = "Reference_Assets"
)

if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force | Out-Null }

$Urls = Get-Content $UrlFile | Where-Object { $_ -match '^https?://' }

function Extract-CssUrls {
    param([string]$Html, [string]$BaseUrl)
    $cssUrls = @()
    $dq = [char]34
    $sq = [char]39
    $pattern = "href\s*=\s*[$dq$sq ]([^$dq$sq ]*\.css[^$dq$sq ]*)[$dq$sq ]"
    $matches = [regex]::Matches($Html, $pattern, 'IgnoreCase')
    foreach ($m in $matches) {
        $url = $m.Groups[1].Value
        if ($url -match '^https?://') { $cssUrls += $url }
        elseif ($url -match '^//') { $cssUrls += "https:$url" }
        elseif ($url -match '^/') { $uri = [uri]$BaseUrl; $cssUrls += "$($uri.Scheme)://$($uri.Host)$url" }
        elseif ($url -match '^\./') { $uri = [uri]$BaseUrl; $baseDir = [System.IO.Path]::GetDirectoryName($uri.AbsolutePath); $cssUrls += "$($uri.Scheme)://$($uri.Host)$baseDir/$($url.Substring(2))"; }
        elseif ($url -notmatch '^#') { $uri = [uri]$BaseUrl; $baseDir = [System.IO.Path]::GetDirectoryName($uri.AbsolutePath); $cssUrls += "$($uri.Scheme)://$($uri.Host)$baseDir/$url"; }
    }
    return $cssUrls | Select-Object -Unique
}

function Extract-JsUrls {
    param([string]$Html, [string]$BaseUrl)
    $jsUrls = @()
    $dq = [char]34
    $sq = [char]39
    $pattern = "src\s*=\s*[$dq$sq ]([^$dq$sq ]*\.js[^$dq$sq ]*)[$dq$sq ]"
    $matches = [regex]::Matches($Html, $pattern, 'IgnoreCase')
    foreach ($m in $matches) {
        $url = $m.Groups[1].Value
        if ($url -match '^https?://') { $jsUrls += $url }
        elseif ($url -match '^//') { $jsUrls += "https:$url" }
        elseif ($url -match '^/') { $uri = [uri]$BaseUrl; $jsUrls += "$($uri.Scheme)://$($uri.Host)$url" }
        elseif ($url -match '^\./') { $uri = [uri]$BaseUrl; $baseDir = [System.IO.Path]::GetDirectoryName($uri.AbsolutePath); $jsUrls += "$($uri.Scheme)://$($uri.Host)$baseDir/$($url.Substring(2))"; }
        elseif ($url -notmatch '^#') { $uri = [uri]$BaseUrl; $baseDir = [System.IO.Path]::GetDirectoryName($uri.AbsolutePath); $jsUrls += "$($uri.Scheme)://$($uri.Host)$baseDir/$url"; }
    }
    return $jsUrls | Select-Object -Unique
}

function Download-Asset {
    param([string]$Url, [string]$OutDir)
    try {
        $uri = [uri]$Url
        $fileName = [System.IO.Path]::GetFileName($uri.AbsolutePath)
        if ([string]::IsNullOrWhiteSpace($fileName) -or -not $fileName.Contains('.')) {
            $enc = [uri]::EscapeDataString($uri.AbsolutePath)
            $fileName = "asset_" + $enc.Substring(0, [Math]::Min(50, $enc.Length)) + ".bin"
        }
        $fileName = $fileName -replace '[<>:"/\\|?*]', '_'
        $dir = Join-Path $OutDir $uri.Host
        if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
        $outPath = Join-Path $dir $fileName
        Invoke-WebRequest -Uri $Url -OutFile $outPath -UseBasicParsing -TimeoutSec 30 -ErrorAction SilentlyContinue
        if (Test-Path $outPath) {
            $size = (Get-Item $outPath).Length
            Write-Output ("OK: {0} ({1} bytes)" -f $Url, $size)
        } else {
            Write-Output ("FAIL: {0} (no file)" -f $Url)
        }
    } catch {
        Write-Output ("ERROR: {0} ({1})" -f $Url, $_.Exception.Message)
    }
}

$allCss = @()
$allJs = @()

foreach ($url in $Urls) {
    Write-Output ("`n=== FETCHING: {0} ===" -f $url)
    try {
        $html = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
        $content = $html.Content
        $cssList = Extract-CssUrls -Html $content -BaseUrl $url
        $jsList = Extract-JsUrls -Html $content -BaseUrl $url
        
        Write-Output ("CSS found: {0}" -f $cssList.Count)
        Write-Output ("JS found: {0}" -f $jsList.Count)
        
        $allCss += $cssList
        $allJs += $jsList
        
        foreach ($cssUrl in $cssList) {
            Download-Asset -Url $cssUrl -OutDir $OutDir
        }
        foreach ($jsUrl in $jsList) {
            Download-Asset -Url $jsUrl -OutDir $OutDir
        }
    } catch {
        Write-Output ("ERROR fetching {0}: {1}" -f $url, $_.Exception.Message)
    }
}

Write-Output "`n=== SUMMARY ==="
Write-Output ("Total unique CSS: {0}" -f ($allCss | Select-Object -Unique | Count))
Write-Output ("Total unique JS: {0}" -f ($allJs | Select-Object -Unique | Count))
