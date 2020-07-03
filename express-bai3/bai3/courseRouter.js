const express = require("express");

var routes = express.Router();


routes.get('/:course/:part', (req, res) => {
    res.send(`Your course: ${req.params.course}, part: ${req.params.part}`);
})

module.exports = routes;