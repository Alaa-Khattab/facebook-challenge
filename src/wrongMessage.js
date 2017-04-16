var https = require('https');
var utils = require('../assest/utils.js');
function wrongMessage (userID,cb){
var postData = JSON.stringify({
  recipient:{id:userID},
  message:{text:"انتا قاعد بتتخوث!!!!, اكتب زي ما حكنالك وانهي ..."}
});

var opts = {
  hostname: 'graph.facebook.com',
  port: 443,
  path: `/v2.6/me/messages?access_token=EAACDfeAHkZCEBAGoOXEZBac3sn4ZCDrrXUYRI7a5d9tJqsMi12diZC5Fsy68ndMZBzQ301RVggPKyUQCotZBsQMbOVCfCVyQlhZCXmx042I0vp5eU9rabUwZAFNLUDjejx5O5GNsAGDTKlIxLsWUZCZC4ADa2s1CtiA8qrmwdWQeJ8qgZDZD`,
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
};

var req = https.request(opts, (res) => {
  utils.parseBody(res, (err, body) => {
    if(err) {
      console.log('err',err);
      return res.end();
    }

    console.log('body',body);
  });
});
cb(undefined)

req.write(postData);
req.end();
}
module.exports = {
  wrongMessage : wrongMessage
}
