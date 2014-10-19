
var fs = require('fs');
var path = require ('path');

exports.filterfiles = function (dirname, ext, callback) {

    var matchingfiles = [];

    fs.readdir(dirname, function (err, files) {
        if (err) {
            return callback(err);
        }

        for (i = 0; i < files.length; ++i) {
            var basename = path.basename(files[i]);
            var extension = path.extname(basename);

            if (extension === ext) {
                matchingfiles.push(basename);
            }
        }

        return callback(null, matchingfiles);
    });
};






