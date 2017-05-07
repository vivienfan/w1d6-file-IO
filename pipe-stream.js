var fs = require("fs");

// create a readable stream
var readerStream = fs.createReadStream("./tmp/test_async.txt");

// create a writable stream
var writerStream = fs.createWriteStream("./tmp/output-pipe.txt");

// pipe the read and write operations
// read test_async.txt
// then write data to output-pipe.txt
readerStream.pipe(writerStream);

console.log("Program ended");