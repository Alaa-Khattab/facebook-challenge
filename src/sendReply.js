var https = require('https');
var utils = require('../assest/utils.js');
 function sendReply (userID,cb){
var postData = JSON.stringify({
  recipient:{id:userID},
  message:{text:"You are welcome"}
});

var opts = {
  hostname: 'graph.facebook.com',
  port: 443,
  path: `/v2.6/me/messages?access_token=EAACDfeAHkZCEBABSd5ECqK8Ab1u1wmWrR1gjbeE0ZC6XwfXFZCaOf8vuuz6BmkZCyJ5Qj6JBco8VUgoxC9pnXSYSosUipDNeubivQ4i0qgUPZCMz3T2VfD3sWupZBCbG43HgJJFuBfY409fGf10f2awg9nkNERwoyfzZCfP8ZAO0lAZDZD`,
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
