'use strict'
var s = 'Hello';
function greet(name) {
    console.log(s+','+name+'!');
}
function getSum(...rest) {
    var sum = 0;
    for (let n of rest) {
        sum += n;
    }
    return sum;
}
module.exports = {greet,getSum};
