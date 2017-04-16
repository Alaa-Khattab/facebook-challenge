var utils = require('../assest/utils.js');
var correct = require('./sendReply.js');
var wrong = require('./wrongMessage.js');

module.exports = (req, res) => {
  utils.parseBody(req, (err, payload) => {
    if (err) {
      console.log('err', err);
      return res.end('Error');
    }
    var senderID = payload.entry[0].messaging[0].sender.id;
    var message = payload.entry[0].messaging[0].message.text;
    console.log('User ID :', senderID);
    console.log('message :', message);
    console.log('IM in POST route');
    if (message === 'start') {
      correct.sendReply(senderID,(err)=>{
        res.end('CORRECT')
      })
    } else {
      wrong.wrongMessage(senderID,(err)=>{
        res.end('WRONG')

      })

    }
  });
}
