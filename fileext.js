
var fs = require('fs');
var path = require ('path');

var dirname = process.argv[2];
if(!dirname) {
    throw 'Please provide a dir name';
}

var textfiles = [];

fs.readdir(dirname, function(err, files) {
   if(err) throw err;

   console.log(files);

   for (i = 0; i < files.length; ++i) {
       var basename = path.basename(files[i]);
       console.log('basename=' + basename);
       var ext = path.extname(basename);
       console.log('ext=' + ext);
       if(ext === ".txt") {
           textfiles.push(basename);
       }
   }
   console.log('textfiles =' + textfiles);
});





