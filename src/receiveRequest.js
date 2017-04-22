var utils = require('../assest/utils.js');
const receive = require('./receiveMessage.js');
const post = require('./receivedPostback.js');

module.exports = (req, res) => {
  utils.parseBody(req, (err, payload) => {
    if (err) {
      console.log('err', err);
      return res.end('Error');
    }
    console.log('payload.entry',payload.entry);
    payload.entry.forEach(function(entry) {
      console.log('entry WWWW:',payload.entry.messaging[0]);
      var pageID = entry.id;
      var timeOfEvent = entry.time;
      entry.messaging.forEach(function(event) {
        if (event.message) {
          console.log('event.message',event.message);
          receive.receivedMessage(event,(err)=>{
            console.log(err);
          });
        } else if (event.postback) {
          post.receivedPostback(event,(err)=>{
            console.log(err);
          });
        } else {
          console.log();
          console.log("Webhook received unknown event: ", event);
        }
      })
    })
  })
}
