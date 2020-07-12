var express = require("express");
var routes = express.Router();
var appController = require("../controller/index")

routes.get("/javascript/bai1", appController.gotoBai2Message1);
routes.get("/javascript/bai2", appController.gotoBai2Message2);
routes.get("/html/bai1", appController.gotoHtmlBai1);
routes.get('/', appController.gotoHome);
routes.get('/login', appController.gotoLoginPage);
routes.get('/download', appController.gotoDownload);
module.exports = routes;
