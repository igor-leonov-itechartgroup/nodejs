var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function (req, res) {
    switch (req.url) {
        case '/':
            sendFile("index.html", res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            break;

        case '/publish':
            var body = '';
            req.on('readable', function () {
                body += req.read();
                if (body.length > 1e4) {

                    res.statusCode = 413;
                    res.end('too big');
                }
            }).on('end', function () {
                try {
                    body = JSON.parse(body);
                    chat.publish(body.message);
                    res.end('ok');
                } catch (e) {
                    res.statusCode = 400;
                    res.end('bad request');
                    return;
                }
            });

            break;

        default:
            res.statusCode = 404;
            res.end("not found");
            break
    }

}).listen(3000);

function sendFile(fileName, res) {
    var file = fs.ReadStream(fileName);
    file.pipe(res);
    file.on('error', function (err) {
        res.end('error');
    });

    file.on('open', function () {
    });
    file.on('close', function () {
    });
    res.on('close', function () {
        file.destroy();
    });
}