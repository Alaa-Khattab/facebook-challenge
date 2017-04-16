var utils = require('../assest/utils.js');
module.exports =(req,res)=>{
  var challenge = utils.parseUrl(req.url);
  res.end(challenge['hub.challenge']);

}
