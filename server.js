var express = require('express');
var path = require('path');
var app  = express();
// var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, './client')));

app.listen(port, function(){
  console.log('listening on port:' + port)
})
