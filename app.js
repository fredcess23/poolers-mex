var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register');
var profile = require('./routes/profile');
var carpool = require('./routes/carpool');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/views')));


//Conection to Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/poolersmx', function(error){
 if(error){
    throw error; 
 }else{
    console.log('Conected to MongoDB');
 }
});

//Documents
var UserSchema = mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  user: String,
  password: String
});

var User = mongoose.model('user', UserSchema);

//login method

app.post('/login', function(req, res){


	User.findOne({'user':req.query.userid, 'password':req.query.psw }, 'email user', function (err, doc) {

	    if (err) 
	        //return handleError(err);
	        res.send('Error.');
	    else{
	          //console.log('%s %s', doc.users.email, doc.users.user) 
	          res.send(doc);
	    }
	})


});

//register method

app.post('/save', function(req, res){
if(req.query._id == null){
  //Insert
  var users = new User({
     name: req.query.name,
     lastname: req.query.lastname,
     email: req.query.email,
     user: req.query.user,
     password: req.query.password
  });
  users.save(function(error, document){
    if(error){
      res.send('Error !');
    }else{
      res.send(document);
    }
    });

  }else{
    //Update
  User.findById(req.query._id, function(error, document){
      if(error){
        res.send('Error.');
      }else{
        var users = document;
        users.name = req.query.name,
        users.lastname = req.query.lastname,
        users.email = req.query.email,
        users.user = req.query.user,
        users.password = req.query.password
        users.save(function(error, document){
        if(error){
            res.send('Error !');
        }else{ 
            res.send(document);
        }
      });
    }
  });
}
});




app.use('/', routes);
app.use('/users', users);
app.use('/register', register);
app.use('/profile', profile);
app.use('/carpool', carpool);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





module.exports = app;
