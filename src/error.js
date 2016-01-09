var util = require('util');

var phrases = {
    hello : 'Hello',
    world : 'World'
};

function PhraseError(msg) {
    this.message = msg;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);

PhraseError.prototype.name = 'PhraseError';
function HttpError(status, msg) {
    this.status = status;
    this.message = msg;
}
util.inherits(HttpError, Error);

PhraseError.prototype.name = 'HttpError';

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError('no such phrase ' + name);
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404,'no such page');
    }

    return util.format("%s %s !" , getPhrase('hell1o'), getPhrase('world'));
}
try {
var page = makePage('index.html');
console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error('error! %s %s %s',e.message, e.name, e.stack);
    }
}