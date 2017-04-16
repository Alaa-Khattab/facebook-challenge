var utils = require('../assest/utils.js');
var correct = require('./sendReply.js');
var wrong = require('./wrongMessage.js');
var create = require('./createChallenge.js')

module.exports = (req, res) => {
  utils.parseBody(req, (err, payload) => {
    if (err) {
      console.log('err', err);
      return res.end('Error');
    }
    var senderID = payload.entry[0].messaging[0].sender.id;
    var message = payload.entry[0].messaging[0].message.text;
    var postback = payload.entry[0].messaging[0].postback
    console.log('User ID :', senderID);
    console.log('message :', message);
    console.log('postback:', postback);
    console.log('payload',JSON.stringify(payload));

    console.log('IM in POST route');
    if (message === 'start') {
      correct.sendReply(senderID, (err) => {
        res.end('CORRECT')
      })
    } else if (postback === 'Create Challenge') {
      create.createChallenge(userID, (err) => {
        res.end();
      })
    } else {
      wrong.wrongMessage(senderID, (err) => {
        res.end('WRONG')

      })

    }
  });
}
