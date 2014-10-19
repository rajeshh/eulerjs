var fs = require('fs');

var buf = fs.readFileSync('testfile');
console.log(buf.toString());

console.log(buf.toString().split('\n').length-1);

