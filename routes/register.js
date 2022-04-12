var express = require('express');
var router = express.Router();

let index = require('../routes/index');


router.get('/', function(req, res, next) {
  res.render('register');
});

module.exports = router;