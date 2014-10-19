var extmodule = require('./fileextmod.js')

var dirname = process.argv[2];
if(!dirname) {
    throw 'Please provide a dir name';
}
var ext = process.argv[3];
if(!dirname) {
    throw 'Please provide extension';
}

extmodule.filterfiles(dirname, ext, function(err, data) {
    if(!err) {
        console.log('There are ' + data.length + ' matching files');
        console.log(data.toString().split(',').join("\n"));
    } else {
        console.log('error');
    }
});

