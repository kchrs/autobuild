// var request = require('request');

// var headers = {
//     'accept': 'application/json',
//     'Authorization': 'U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg'
// };

// var options = {
//     url: 'https://api.bitrise.io/v0.1/apps/2c144224de1379d6/builds',
//     headers: headers
// };

//curl -X POST "https://api.bitrise.io/v0.1/apps/register" -H "Authorization: U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg" -d "{ \"git_owner\": \"kchrs\", \"git_repo_slug\": \"myid\", \"is_public\": false, \"provider\": \"github\", \"repo_url\": \"https://github.com/kchrs/myid.git\", \"type\": \"git\"}"

//register bitrise ssh key

//curl -X GET "https://api.bitrise.io/v0.1/apps/2c144224de1379d6" -H "Authorization: U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg" 


//curl -X POST -H "Authorization: U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg" "https://api.bitrise.io/v0.1/apps/bfddfac31250e38d/register-ssh-key" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"bitrise-ssh\": \"kchrs\", \"auth_ssh_public_key\": \"bitrise-ssh.pub\", \"is_register_key_into_provider_service\": true}"


//curl -X POST "https://api.bitrise.io/v0.1/apps/bfddfac31250e38d/register-ssh-key" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"auth_ssh_private_key\": \"string\", \"auth_ssh_public_key\": \"string\", \"is_register_key_into_provider_service\": true}"


// // curl -X POST -H "Authorization: U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg" "https://api.bitrise.io/v0.1/apps/2c144224de1379d6/builds" -d '{"hook_info":{"type":"bitrise"},"build_params":{"branch":"master"}}'

//    curl -X POST -H "Authorization: U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg" "https://api.bitrise.io/v0.1/apps/ad0cfc372713e5a1/builds" -d '{"hook_info":{"type":"bitrise"},"build_params":{"branch":"master"}}'
//curl -X GET -H "Authorization: U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg" "https://api.bitrise.io/v0.1/apps" -H "accept: application/json"
// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);


var request = require('request');

var headers = {
    'Authorization': 'U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg'
};
//todo get authorization and bitrise params
//"workflow_id": "primary"

var dataBuildExistingApp = '{"hook_info":{"type":"bitrise"},"build_params":{"branch":"master"}, "workflow_id": "primary"}';

var buildAppOtions = {
     //url: 'https://api.bitrise.io/v0.1/apps/2c144224de1379d6/builds',
    url: 'https://api.bitrise.io/v0.1/apps/6763003eab7dcb7c/builds',
    method: 'POST',
    headers: headers,
    body: dataBuildExistingApp
};

function callbackBuildApp(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(buildAppOtions, callbackBuildApp);
