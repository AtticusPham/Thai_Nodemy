const express = require('express')
const app = express();
const path = require('path');



app.use(express.static("public"));


app.get('/', function(req, res) {
    var dir = path.join(__dirname, 'public/home.html');
    res.sendFile(dir);
}).listen(3000)
