
var request = require('request');

var headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
};

var dataString = '{ "auth_ssh_private_key": "bitrise-ssh", "auth_ssh_public_key": "bitrise-ssh.pub", "is_register_key_into_provider_service": false}';

var options = {
    url: 'https://api.bitrise.io/v0.1/apps/6763003eab7dcb7c/register-ssh-key',
    //autobuild app 6763003eab7dcb7c
    //7682b1344d04c85c
    //a96d3e1a7173d8a7
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
