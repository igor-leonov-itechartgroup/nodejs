var http = require('http');

var server = http.Server();
server.listen(12345, '127.0.0.1');

var counter = 0;
server.on('request', function (req, res) {
   res.end('hlwrld ' + ++counter);
});

var emit = server.emit;

server.emit = function(event) {
    console.log(event);
    emit.apply(server, arguments)
};