var request = require('request');

var headers = {
    'Authorization': 'U8HOfHobVfFme3WlQFsr3vNSgazU_Bsu_BAHBDBdIIr6CmrQHKONALwoSBChtqwX7w4knrL2pmovpMETVGgbkg'
};
var dataRegisterNewApp = '{ "git_owner": "kchrs", "git_repo_slug": "autobuild","branch":"master", "is_public": true, "provider": "github", "repo_url": "https://github.com/kchrs/autobuild.git", "type": "git"}';


var registerAppOptions = {
    url: 'https://api.bitrise.io/v0.1/apps/register',
    method: 'POST',
    headers: headers,
    body: dataRegisterNewApp
};

function callbackRegisterApp(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(registerAppOptions, callbackRegisterApp);

