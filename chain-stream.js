var fs = require("fs");
var zlib = require("zlib");

// compress the file test_async.txt into test_async.txt.gz
fs.createReadStream("./tmp/test_async.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("./tmp/test_async.txt.gz"));

  console.log("File compressed");