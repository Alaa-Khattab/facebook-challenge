var utils = require('../assest/utils.js');
module.exports =(req,res)=>{
  var challenge = utils.parseUrl(req.url);
  console.log('challenge',challenge);
  res.end(challenge['hub.challenge']);

}
