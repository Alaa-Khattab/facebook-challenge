var https = require('https');
var utils = require('../assest/utils.js');
function createChallenge (userID,cb){
var postData = JSON.stringify({
  recipient:{id:userID},
  message:{text:"type your country"}
});

var opts = {
  hostname: 'graph.facebook.com',
  port: 443,
  path: `/v2.6/me/messages?access_token=EAASeNQVU8NsBAJlsLCoIOPFScZBW9KZAMktoZByoBDtUMtdgFJu5gmujpvUiS5pJnz7PQVZCr2wyyhNEFQe1EBVGgyu8x0kB1k5oipqsAhFZAceDWEmGqYZAyHi1dWccl3JeaZBP5dumIbdZBWyrel8Qk745aD3VZAjSxZBVnxjWKwQAZDZD`,
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
  createChallenge : createChallenge
}
