var db = require("db");
var log = require('../logger')(module);
function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrase('Hello') + ", " + who.name)
};

log('USer js required');

module.exports = User;
//global.User = User;

//console.log(module);