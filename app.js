var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pgp = require("pg-promise")();

var db = pgp("postgres://postgres:postgres@localhost:5432/postgres");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var birds = require('./routes/birds');
// var test = require('./routes/test');
var timestamp = require('./routes/timestamp');
var login = require('./routes/login');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/birds', birds);
// app.use('/test', test);
app.use('/timestamp', timestamp);
app.use('/login', login);

db.one("SELECT $1 AS value", 123)
  .then(function (data) {
    console.log("DATA:", data.value);
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });

module.exports = app;
