var fs = require("fs");

function readAFile(filePath) {
  fs.readFile(filePath, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data.toString());
  });
}

readAFile(process.argv[2]);