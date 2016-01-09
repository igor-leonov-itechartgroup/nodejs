var ee = require('events').EventEmitter;

var server = new ee;

server.on('request', function(request){
    request.approved=true;
});

server.on('request', function(request){
console.log(request);
});

server.emit('request', {from:'cli'});
server.emit('request', {from:'cli2'});

server.emit('error');