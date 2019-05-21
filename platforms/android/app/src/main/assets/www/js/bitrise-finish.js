var request = require('request');


var headers = {
    'accept': 'application/json',
    'Authorization': 'U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg'
};

// var headers = {
//     'accept': 'application/json',
//     'Content-Type': 'application/json'
// };
//curl -X POST -H 'Authorization: StuGxUHuD5TyfadsfdsafVfIOVhS5O7r8O0pvS-1FdRdV3SdvCx2xHe7VhIJ5ZmG1ToTxZ-ixgBv3OFW3BMl79sF4qfE5ZQ' 'https://api.bitrise.io/v0.1/apps/2e16a782f7d365df/finish' -d '{"project_type":"cordova","stack_id":"osx-vs4mac-stable","config":"default-ios-config","mode":"manual","envs":{"env1":"val1","env2":"val2"},"account_slug":"b1885a65b5679fe9"}'

//var dataString = '{ "config": "string", "envs": {}, "mode": "string", "organization_slug": "string", "project_type": "string", "stack_id": "string"}';
var dataString = '{"project_type":"cordova","stack_id":"osx-vs4mac-stable", "mode":"manual", "config":"default-ios-config", "envs":{"env1":"val1","env2":"val2"},"account_slug":"b1885a65b5679fe9"}';
//6763003eab7dcb7c
//curl -X POST -H 'Authorization: ACCESS-TOKEN' 'https://api.bitrise.io/v0.1/apps/APP-SLUG/finish' -d '{"project_type":"ios","stack_id":"osx-vs4mac-stable","config":"default-ios-config","mode":"manual","envs":{"env1":"val1","env2":"val2"},"organization_slug":"e1ec3dea540bcf21"}'
//curl -X POST -H 'Authorization: U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg' 'https://api.bitrise.io/v0.1/apps/6763003eab7dcb7c/fin
//ish' -d '{"project_type":"cordova","stack_id":"osx-vs4mac-stable","config":"default-ios-config","mode":"manual","envs":{"env1":"val1","env2":"val2"},"account_slug":"b1885a65b5679fe9"}'
var options = {
    url: 'https://api.bitrise.io/v0.1/apps/6763003eab7dcb7c/finish',
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
