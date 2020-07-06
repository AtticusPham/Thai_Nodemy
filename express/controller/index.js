const path = require('path');

exports.gotoBai2Message1 = (req, res) => { res.send("Welcome bạn đến javascript bài 1"); }
exports.gotoBai2Message2 = (req, res) => { res.send("Welcome bạn đến javascript bài 2"); }
exports.gotoHtmlBai1 = (req, res) => {res.send("welcome to html bai1")};
exports.gotoHome = (req, res) => res.sendFile(path.join(__dirname, "/index.html"));
exports.gotoLoginPage = (req, res) => res.sendFile(path.join(__dirname, "/login.html"));
exports.gotoDownload = (req, res) => res.download(path.join(__dirname, "/image/downloadthis.jpg"));