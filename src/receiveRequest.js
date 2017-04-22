var utils = require('../assest/utils.js');
var create = require('./createChallenge.js')
const receive = require('./receiveMessage.js');
const post = require('./receivedPostback.js');

module.exports = (req, res) => {
  utils.parseBody(req, (err, payload) => {
    if (err) {
      console.log('err', err);
      return res.end('Error');
    }
    payload.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receive.receivedMessage(event);
        } else if (event.postback) {
          post.receivedPostback(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      })
    })
  })
}
