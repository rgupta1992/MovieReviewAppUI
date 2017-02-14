var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});

var port = 8080;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});







