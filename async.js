console.log("Node starting...");
var fs = require('fs');
                           // callback function
fs.readFile('./file1.txt', function(err, data) {
    console.log(data);  // buffer object
    console.log(data.toString());
});




