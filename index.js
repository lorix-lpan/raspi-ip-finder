var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.post('/', function (req, res) {
  res.send(req.body.ip + '\n');
  console.log(req.body.ip + '\n');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
