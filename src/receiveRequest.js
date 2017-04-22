var utils = require('../assest/utils.js');
const receive = require('./receiveMessage.js');
const post = require('./receivedPostback.js');

module.exports = (req, res) => {
  utils.parseBody(req, (err, payload) => {
    if (err) {
      console.log('err', err);
      return res.end('Error');
    }
    if (payload.entry[0].messaging[0].message) {
      console.log('event.message', payload.entry[0].messaging[0]);
      receive.receivedMessage(payload.entry[0].messaging[0], (err) => {
      });
    } else if (payload.entry[0].messaging[0].postback) {
      post.receivedPostback(payload.entry[0].messaging[0], (err) => {
      });
    } else {
      console.log("Webhook received unknown event: ", event);
    }
  })
}
