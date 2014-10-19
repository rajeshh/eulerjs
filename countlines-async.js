var fs = require('fs');

var buf = fs.readFile('testfile', function(err, data){
	if(err) throw err;
	console.log(data.toString().split('\n').length-1);
});

