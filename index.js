var express = require('express')
  , http = require('http')
  , config = require('configuration');

var app = express();
var server = app.listen(80);
console.log("Express server listening on port "+ config.port);

app.get('/',index);

function index(req,res){
   res.send('Hello ' + config.say);
}
