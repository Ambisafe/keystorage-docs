require('es6-promise').polyfill();
var superagentPromisePlugin = require('superagent-promise-plugin');
var request = superagentPromisePlugin.patch(require('superagent'));


var superagentJsonapify = require('superagent-jsonapify');
superagentJsonapify(request);

var invokeUrl = 'https://j88e4em4zc.execute-api.eu-central-1.amazonaws.com/prod/keystore/';


module.exports = {
  store: function(wallet, token) {
    return request
      .post(invokeUrl + wallet.id)
      .use(superagentPromisePlugin)
      .send(wallet)
      .set('Authorization', token)
      .set('Accept', 'application/json');
  },
  get: function(id, callback) {
    return request
      .get(invokeUrl + id)
      .use(superagentPromisePlugin)
      .set('Accept', 'application/json');
  }
};
