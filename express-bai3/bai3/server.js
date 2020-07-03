const express = require("express");
const app = express();
var router  = require('./courseRouter');




app.use("/nodemy", router);

app.listen(8080, (req, res) => {console.log(`server listening on port: 8080`);});