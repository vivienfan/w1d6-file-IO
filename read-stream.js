var fs = require("fs");
var data = "";

// create a readable stream
var readerStream = fs.createReadStream("./tmp/test_async.txt");

// set the encoding to be UTF-8
readerStream.setEncoding("UTF8");

// handle stream events --> data, end, and error
readerStream.on("data", function(chunk) {
  // this adds the entire file content
  console.log("adding data");
  data += chunk;
});

readerStream.on("end", function() {
  console.log("end:", data);
});

readerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("Program ended");

// console output:
// -----------------------
// Program ended
// adding data
// end:

// Async