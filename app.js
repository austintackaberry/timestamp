var http = require("http");
var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.get('/:date', function(req, res){
  if (req.params.date === "") {
    res.sendFile('/index.html');
    res.end();
  }
  else if (req.params.date > 100) {
    var dateInput = req.params.date*1000;
  }
  else {
    var dateInput = req.params.date;
  }
  var newDate = new Date(dateInput);
  var unixTime = newDate.getTime()/1000;
  var objDate = {
    "unix": unixTime,
    "natural": newDate.toDateString()
  }
  res.json(objDate);
});
app.listen(8000);
console.log('Server running on Port 8000...');
