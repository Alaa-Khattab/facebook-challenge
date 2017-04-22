 const reply = require('./sendReply.js');
 const message = require('./sendTextMessage.js');

 function receivedMessage(event) {
   var senderID = event.sender.id;
   var message = event.message;
   var messageAttachments = message.attachments;
   var messageText = message.text;
   console.log('message at trcivedMSG', messageText);
   if (messageText) {
     switch (messageText) {
       case 'start':
         reply.sendReply(senderID);
       default:
         message.sendTextMessage(senderID, 'انتا قاعد بتتخوث, اكتب زي الخلق وانهي...');
     }
   } else if (messageAttachments) {
     message.sendTextMessage(senderID, 'Message with attachment received');
   }
 }
 module.exports = {
   receivedMessage: receivedMessage
 }
