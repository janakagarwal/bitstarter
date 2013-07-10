var express = require('express');

var app = express.createServer(express.logger());

content = new Buffer(256);

fs.readFileSync('./index.html', function read(err, data) {
   if (err) {
       throw err;
   }
   content = data;
});

var text = content.toString('utf8');

app.get('/', function(request, response) {
  response.send('test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
