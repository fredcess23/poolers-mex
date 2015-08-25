var express = require('express');
var router = express.Router();
var path = require('path');

var sess;

/* GET register page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  sess=req.session;
  if(sess.user){
  	res.sendFile(path.join(__dirname, '../public/views', 'profile.html'));
	  console.log('redirige a profile!!!');
  }
  else
	  res.redirect('/');
  	  console.log('redirige a home!!!');

});

module.exports = router;
