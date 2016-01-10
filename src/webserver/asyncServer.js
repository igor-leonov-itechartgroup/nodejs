var http = requre('http');
var fs = requre('fs');

http.createServer(function(req,res) {
    var info;
    if (req.url == '/') {
      info = fs.readFile('index.html', function (err, result) {
          if (err){
              res.statusCode=500;
              res.end('err');
              return;
          }
          res.end(info);
      });


    } else if (req.url='/now') {
        res.end(new Date().toString()   );
    }
}).listen(3000);