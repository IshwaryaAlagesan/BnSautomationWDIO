# Needed for PowerShell 7.3 and newer
$PSNativeCommandArgumentPassing = "Legacy"

& "C:\Users\User\AppData\Local\Programs\WinSCP\WinSCP.com" `
  /log="C:\ishu\WinSCP.log" /ini=nul `
  /command `
    "open sftp://5loq1km9-Staging-IngestionAdmin@pega-75efca6c0c7c428f9-eu.sftp.pegaservice.net/ -hostkey=`"`"ssh-rsa 4096 mluAQ0mGxorH1o4D6gq3fljAwX6y4RCZO7CPJZ9+h/I`"`" -privatekey=`"`"C:\Users\User\Downloads\uat_id_rsa.ppk`"`" -rawsettings Tunnel=1 TunnelHostName=`"`"20.0.61.218`"`" TunnelUserName=`"`"PEGAAi4User`"`" TunnelPublicKeyFile=`"`"C:%5CUsers%5CUser%5CDownloads%5CBastionHostPEGAConnect_key%20(2).ppk`"`" TunnelHostKey=`"`"ssh-ed25519%20255%20P/MDLUhOlKaTJsMlR2SK8BrfOq19LM02/wD0PGC0afI`"`"" `
    "put C:\TestAutomation\wdio-framework\utilities\out\*.pdf /ReturnLetters/ -nopreservetime -nopermissions" `
    "exit"

$winscpResult = $LastExitCode
if ($winscpResult -eq 0)
{
  Write-Host "Success"
}
else
{
  Write-Host "Error: $winscpResult"
}

exit $winscpResult
