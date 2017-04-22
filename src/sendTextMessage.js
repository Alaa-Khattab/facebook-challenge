var https = require('https');
var utils = require('../assest/utils.js');
function sendTextMessage (userID,message){
var postData = JSON.stringify({
  recipient:{id:userID},
  message:{text:message}
});

var opts = {
  hostname: 'graph.facebook.com',
  port: 443,
  path: `/v2.6/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
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
req.write(postData);
req.end();
}
module.exports = {sendTextMessage:sendTextMessage}
