var ee = require('events').EventEmitter;

var db = new ee;

function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');
    this.send = function (data) {
        console.log(data);
    };

    this.onError = function () {
        self.send('trouble');
    };
    function onData() {
        self.send('trouble');
    }

    this.end = function () {
        db.removeListener('data', onData)
    };

    db.on('data', onData);
}

setInterval(function () {
    var req = new Request();
    req.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);