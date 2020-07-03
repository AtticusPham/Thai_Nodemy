const express = require('express')
const app = express();
const path = require('path');



app.use(express.static("public"));

const port = 3000;
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/home.html'));
}).listen(port, ()=> console.log(`app listens at http://localhost:${port}`));
