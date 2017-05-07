var fs = require("fs");
var data = "Simply Easy Learning";

// create a writable strea
var writerStream = fs.createWriteStream("./tmp/write-stream.txt");

// write the data to stream with UTF-8 encoding
writerStream.write(data, "UTF8");

// mark the end of file
writerStream.end();

// handle stream events --> finish, and error
writerStream.on("finish", function() {
  console.log("Write completed.");
});

writerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("Program ended");

// console output:
// -------------------
// Program ended
// Write completed.

// Async