 const reply = require('./sendReply.js');
 const send = require('./sendTextMessage.js');

 function receivedMessage(event, cb) {
   var senderID = event.sender.id;
   var message = event.message;
   var messageAttachments = message.attachments;
   var messageText = message.text;
   console.log('message at trcivedMSG', messageText);
   if (messageText) {
     switch (messageText) {
       case 'start':
         reply.sendReply(senderID, (err) => {
           console.log('error in reply', err);
           cb(undefined)
         });
         break;
       default:
         send.sendTextMessage(senderID, 'انتا قاعد بتتخوث, اكتب زي الخلق وانهي...', (err) => {
           console.log('error in sendTextMessage', err);
           cb(undefined)
         });
     }
   } else if (messageAttachments) {
     send.sendTextMessage(senderID, 'Message with attachment received', (err) => {
       console.log('error in sendTextMessage', err);
       cb(undefined)

     });
   }
 }
 module.exports = {
   receivedMessage: receivedMessage
 }
