var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("Hello, world!");
}).listen(8888)

console.log('Server started on 8888')
