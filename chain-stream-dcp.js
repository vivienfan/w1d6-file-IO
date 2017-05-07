var fs = require("fs");
var zlib = require("zlib");

// decompress the file test_async.txt.gz into test_async_dcp.txt
fs.createReadStream("./tmp/test_async.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("./tmp/test_async_dcp.txt"));

  console.log("file decompressed");