var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var isProduction = process.env.NODE_ENV === 'production';

var index = require('./routes/index');
var users = require('./routes/users');
// var appointment = require('./routes/api/appointmentRoutes');

var routes = require('./routes/index');

var app = express();
// mongoose.connect('mongodb://dev1:abcd1234@ds113942.mlab.com:13942/webappdb');

if(!isProduction){
  mongoose.connect('mongodb://localhost:27017/webapp',{useNewUrlParser: true})
  mongoose.set({debug : true});
}else{
  mongoose.connect('mongodb://dev1:abcd1234@ds113942.mlab.com:13942/webappdb',{useNewUrlParser: true})
  mongoose.set({debug : false});
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use('/', index);
// app.use('/users', users);
// app.use('/api/appointment',appointment);

app.use(require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
