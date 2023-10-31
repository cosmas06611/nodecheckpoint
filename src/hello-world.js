const http = require("http")
// console.log('HELLO WORLD')

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello node\n')
}).listen(3000);

console.log('serve has started');