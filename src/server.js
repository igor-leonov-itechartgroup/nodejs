require('./user');
function run() {
var vasya = new User("Вася");
var petya = new User("Пётр");

vasya.hello(petya);
}

if(module.parent) {
    exports.run = run;
} else {
    run();
}