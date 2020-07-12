const express = require("express");
const path = require('path');
const app = express();
const port = 8000;
var routes = require("./routes/routes");


// express static
app.use(express.static("public"));
/* copy these comment and paste in the browser */
// bring in routes
// localhost:8000/javascipt/bai1
// localhost:8000/javascipt/bai2
// localhost:8000/html/bai1
// localhost:8000/
// localhost:8000/login
// localhost:8000/download
app.use("/nodemy", routes);
app.use("/", routes);

app.listen(port, ()=> console.log(`app listens at http://localhost:${port}`));