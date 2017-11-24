'user strict';
var http = require('http')
var error = './file/error404.html'
var server = http.createServer(function (request, response){
    console.log(request.method + ':' + request.url);
    fs.readFile( __dirname + "/" + "data.json",function(err,data){
        if(err) {
          Response(response,error);
        }else {
            res.writeHead(200,{'Content-type':"text/html"});
            res.end(data);
        }
    });
})
server.listen(8000);
console.log('Server is running at http://127.0.0.1:8000/');
