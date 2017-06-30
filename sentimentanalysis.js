var sentimentAnalysis = require('sentiment-analysis');
// -0.6
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('/home/shaunak/Documents/SAR14.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  console.log(line.toString() + "\n    RETURNED:\n ")
  console.log(sentimentAnalysis(line))
  console.log("\n ")
});

rl.on('close', function() {
  // do something on finish here
});
