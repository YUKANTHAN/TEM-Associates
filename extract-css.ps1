$html = Get-Content "temp_fluor.html" -Raw
$pattern = '/_next/static/css/'
$index = 0
while ($true) {
    $pos = $html.IndexOf($pattern, $index)
    if ($pos -lt 0) { break }
    $end = $pos
    while ($end -lt $html.Length -and $html[$end] -ne '"' -and $html[$end] -ne "'" -and $html[$end] -ne '\' -and $html[$end] -ne ' ' -and $html[$end] -ne '>' -and $html[$end] -ne '<') {
        $end++
    }
    $url = $html.Substring($pos, $end - $pos)
    Write-Output $url
    $index = $end
}
