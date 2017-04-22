var https = require('https');
var utils = require('../assest/utils.js');
 function sendReply (userID,cb){
var postData = JSON.stringify({
  recipient:{id:userID},
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Do you want to get challenge or create chellange for others?",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://petersapparel.parseapp.com",
            "title":"Get Challenge"
          },
          {
            "type":"postback",
            "title":"Create Challenge",
            "payload":"USER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }
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
cb(undefined)
req.write(postData);
req.end();
}
module.exports = {
  sendReply : sendReply
}
