var http = require('http');
var url = require('url');

var server = http.Server();
server.listen(12345, '127.0.0.1');

server.on('request', function (req, res) {
    console.log(req.method, req.url);
    var urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname = '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
    } else {
        res.statusCode=404;
        res.end('no');
    }

    console.log(req.headers);
});