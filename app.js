//import React, { Component, } from 'react';
//import 'public';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejsLint = require('ejs-lint');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dropboxRouter = require('./routes/dropbox');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dropbox', dropboxRouter);

app.get('/dropbox', function(req, res){
  res.render('/dropbox.ejs');
});

//React-test
/* class App extends Component {
  render() {
    return (
    <div className="App">
      <h2>Welcome to the Road to learn React</h2>
    </div>
    );
  }
}

export default App;
*/

//ejsLint(dropboxRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
