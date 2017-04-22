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
      var pageID = entry.id;
      var timeOfEvent = entry.time;
      entry.messaging.forEach(function(event) {
        console.log('event',event);
        if (event.message) {
          console.log('event.message',event.message);
          receive.receivedMessage(event,(err)=>{
            console.log(err);
          });
        } else if (event.postback) {
          console.log('event.message',event.message);
          post.receivedPostback(event,(err)=>{
            console.log(err);
          });
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      })
    })
  })
}
