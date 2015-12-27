var db = require("db");
db.connect();

var log = require('./logger')(module);

var User = require('./user');

function run() {
    var vasya = new User("Вася");
    var petya = new User("Пётр");

    vasya.hello(petya);

    log(db.getPhrase('Run successful'));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}