var http = require('http');

console.log(process.argv);
console.log(process.env.HOME);
var argv = require('optimist').argv;
http.createServer(function(req, res) {
    res.end("success");
}).listen(argv.port);