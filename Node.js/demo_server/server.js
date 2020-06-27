const express = require('express')
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');

app.use('/public', express.static(publicPath));

app.get('/', function(req, res) {
    var dir = path.join(__dirname, 'public/home.html');
    res.sendFile(dir);
}).listen(3000)
