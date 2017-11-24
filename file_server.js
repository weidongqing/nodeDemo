'user strict';
var 
   fs = require('fs');
   url = require('url');
   path = require('path');
   http = require('http');


var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir:' + root)   

var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    console.log('pathname:' + pathname);
    console.log('filepath:' + filepath);
    fs.stat(filepath, function(err, stats){
        if (err) {
           console.log('error')
        } else {
        console.log('200:'+request.url);
        response.writeHead(200);
        fs.createReadStream(filepath).pipe(response);
        }
    })
})

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');