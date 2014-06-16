
console.log("Node starting...");
var fs = require('fs'); // Make a note on what this is
// console.log(fs);
console.log(fs.readFileSync('./file1.txt')); // FREEZE
