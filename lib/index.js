var request = require('superagent');
var superagentJsonapify = require('superagent-jsonapify');

var invokeUrl = 'https://j88e4em4zc.execute-api.eu-central-1.amazonaws.com/prod/keystore/';

superagentJsonapify(request);

module.exports = {
  store: function(wallet, token) {
    return request
      .post(invokeUrl + wallet.id)
      .send(wallet)
      .set('Authorization', token)
      .set('Accept', 'application/json');
  },
  get: function(id) {
    return request
      .get(invokeUrl + id)
      .set('Accept', 'application/json');
  }
};