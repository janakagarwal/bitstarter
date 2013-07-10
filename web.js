var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var content = new Buffer(256);

//fs.readFileSync('./index.html', function read(err, data) {
//   if (err) {
//      throw err;
//   }
//   content = data; //.write(data, "utf-8)";  
//});

//var text = content.toString('utf-8');

app.get('/', function(request, response) {
  response.send(content.toString('utf-8', fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
