var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(session);


//config
var config = require('./config');
var dbUrl = 'mongodb://localhost/duty';
var port = process.env.PORT || 3007;

var app = express();

mongoose.connect(dbUrl, {useMongoClient: true});

// view engine setup
app.set('views', path.join(__dirname, './app/views/pages'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret:'imooc',
  resave: false,
  saveUninitialized: true,
  store:new mongoStore({
    url:dbUrl,
    collection: 'sessions'
  })
}));

var env = process.env.NODE_ENV || 'development';

if('development' === env){
  app.set('showStackError', true);
  app.use(logger(':method :url :status'));
  app.locals.pretty = true;
  mongoose.set('debug', true);
}
app.locals.moment = require('moment');
app.locals.web = config.web;

require('./route')(app);

app.listen(port);

console.log('duty started on http://localhost:'+port);