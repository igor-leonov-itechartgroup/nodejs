/**
 * Created by xQwert on 12/27/2015.
 */
module.exports = function(module){
    return function(/*...*/) {
        var args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    }


};