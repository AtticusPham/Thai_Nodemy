var fs = require('fs');
// first read file demo.txt
console.log("Reading...");

fs.readFile("demo.txt", (err, data) => {
    if (err) throw err;
    // second add content from file demo to newFile.txt
    fs.appendFile("newFile.txt", data, (err) => {
        if (err) throw err;
        console.log("success!");
    });
});

