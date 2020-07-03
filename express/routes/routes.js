var express = require("express");
const path = require('path');
var routes = express.Router();
var appController = require("../controller/app")

routes.get("/nodemy/javascript/bai1", appController.gotoBai2Message1);
routes.get("/nodemy/javascript/bai2", appController.gotoBai2Message2);
routes.get("/nodemy/html/bai1", appController.gotoHtmlBai1);
routes.get('/', appController.gotoHome);
routes.get('/login', appController.gotoLoginPage);
routes.get('/download', appController.gotoDownload);
module.exports = routes;
