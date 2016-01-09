/**
 * Created by xQwert on 1/9/2016.
 */
var util = require('util');

var obj = {
    a:5,
    b:1
};


console.log(util.inspect(obj));

console.log(util.format("%s %d %j", "str", 9, {tst:'test'}));

function Animal(name) {
    this.name = name;
}

Animal.prototype.test = function() {
    console.log(this.name);
};

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

var rab = new Rabbit("tett");
rab.test();