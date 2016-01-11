var http = requre('http');
var fs = requre('fs');

http.createServer(function(req,res) {
    var info;
    if (req.url == '/') {
        var file = fs.ReadStream(__filename);
        sendFile(file, res);


    } else if (req.url='/now') {
        res.end(new Date().toString()   );
    }
}).listen(3000);

function sendFile(file, res) {

    file.pipe(res);
    file.on('error', function(err){
        res.end('error');
    });

    file.on('open', function() {});
    file.on('close', function() {});
    res.on('close', function() {
        file.destroy();
    });
    //file.on('readable', write);
    //
    //function write() {
    //    var content = file.read();
    //    if (content && !res.write(content)) {
    //        file.removeListener('readable', write);
    //
    //        res.once('drain',function() {
    //            file.on('readable', write);
    //            write();
    //        })
    //    }
    //}

}