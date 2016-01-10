var http = require('http');

var server = http.Server(function(req,res) {
    process.nextTick(function(){
        req.on('readable', function() {

        })
    })
}).listen(3000);
