 require('./sendReply.js');
require('./sendTextMessage.js');

function receivedMessage(event){
   var senderID = event.sender.id;
    var message = event.message;
     var messageText = message.text;
     switch (messageText) {
      case 'start':
        sendReply(senderID);
        break;

      default:
        sendTextMessage(senderID,'انتا قاعد بتتخوث, اكتب زي الخلق وانهي...');
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  }
}

}
