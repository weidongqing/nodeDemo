var express = require('express');
var app = express();
var fs = require("fs");

//无参get
app.get('/listUsers', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");

  console.log('get params: ', req.query)
  fs.readFile( __dirname + "/" + "test.json", 'utf8', function (err, data) {
    if(err) {
      if(err.code == 'ENOENT') {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('not found');
      }
    }else {
      res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
      res.end(data);
    }

  });
})
//带参数的get

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("测试url: http://%s:%s", host, port)

})
