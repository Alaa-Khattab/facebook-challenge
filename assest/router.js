'use strict';
module.exports = {
  'GET /': require('../src/index.js'),
  'GET /facebook': require('../src/faceConnect.js'),
  'POST /facebook': require('../src/receiveMessage.js'),
};
