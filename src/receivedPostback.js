 const message=require('./sendTextMessage.js');
function receivedPostback(event,cb) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfPostback = event.timestamp;
  var payload = event.postback.payload;
  console.log("Received postback for user %d and page %d with payload '%s' " +
    "at %d", senderID, recipientID, payload, timeOfPostback);
  message.sendTextMessage(senderID, "Postback called",(err)=>{
    console.log(err);
    cb(undefined)
  });
}
module.exports={receivedPostback:receivedPostback}
