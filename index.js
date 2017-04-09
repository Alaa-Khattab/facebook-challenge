'use strict';
var http = require('http');
var main = require('./app/main.js');
var PORT = process.env.PORT || 8080;

http.createServer(main).listen(PORT,() => console.log(`Running on ${PORT}`));
