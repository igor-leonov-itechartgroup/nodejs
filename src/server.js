var user = require('./user');
function run() {
var vasya = new user.User("Вася");
var petya = new user.User("Пётр");

vasya.hello(petya);
}

if(module.parent) {
    exports.run = run;
} else {
    run();
}