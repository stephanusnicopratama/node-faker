"use strict";
var express = require('express');
var router = express();
var core = require('./core');
var port = 3000;
router.use(express.json());
router.post('/', core.generator);
router.listen(port, function () {
    return console.log("Example app listening on port " + port + "!");
});
