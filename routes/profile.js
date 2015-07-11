var express = require('express');
var router = express.Router();
var path = require('path');

/* GET register page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../public/views', 'profile.html'));
});

module.exports = router;
