'use strict';

var router = require('./router.js');

module.exports = (req, res) => {
  var path = req.url.split('?')[0];
  var route = `${req.method} ${path}`;
  console.log('route',route);
  try {
    router[route](req,res);
  } catch (error) {
    res.end('Not found');
  }
};
