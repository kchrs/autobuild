var request = require('request');

var headers = {
    'Authorization': 'U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg'
};

var options = {
    url: 'https://api.bitrise.io/v0.1/apps/6763003eab7dcb7c/register-webhook',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
