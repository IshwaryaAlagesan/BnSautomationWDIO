const Client = require('ssh2').Client;
const fs = require('fs');

const tunnelConfig = {
  username: 'PEGAAi4User',
  host: '20.0.61.218',
  port: 22, // default SSH port
  privateKey: fs.readFileSync("./utilities/BastionHostPEGAConnect_key.ppk"),
//   passphrase: 'your_key_passphrase' // if applicable
};

const sftpConfig = {
  username: '5loq1km9-Staging-IngestionAdmin',
  host: 'pega-75efca6c0c7c428f9-eu.sftp.pegaservice.net',
  port: 22, // default SFTP port
//   privateKey: fs.readFileSync('./utilities/uat_id_rsa'),
//   passphrase: 'your_key_passphrase' // if applicable
};

const conn = new Client();

conn.on('ready', function() {
  conn.sftp(function(err, sftp) {
    if (err) throw err;
    // Use the sftp object to interact with the server
    console.log('SFTP Connection Established');
    conn.end();
  });
}).connect({
  host: tunnelConfig.host,
  port: tunnelConfig.port,
  username: tunnelConfig.username,
  privateKey: tunnelConfig.privateKey,
  passphrase: tunnelConfig.passphrase,
  readyTimeout: 5000 // Increase if connection takes longer
});
