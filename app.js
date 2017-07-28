var http = require('http');
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var db = require('./db/index');
var sessionModel = require('./db/sessionModel');
var session = require('./db/session');

var index = require('./routes/index');
var posts = require('./routes/posts');
var login = require('./routes/login');

var app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json({ limit: `1024mb` }));
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db().
  then((db) => {
    sessionModel(db)
      .then((db) => {
        session({app, db});
        app.use('/', index);
        app.use('/api/posts', posts);
        app.use('/api/login', login);        
        // app.use(function(req, res, next) {
        //   var err = new Error('Not Found');
        //   err.status = 404;
        //   next(err);
        // });
        // app.use(function(err, req, res, next) {
        //   res.locals.message = err.message;
        //   res.locals.error = req.app.get('env') === 'development' ? err : {};
        //   res.status(err.status || 500);
        //   res.send('An error occurs!');
        // });
        const httpServer = http.Server(app);
        httpServer.listen(3001);
      })
      .catch(err => {
        console.log('an model error occurs');
        console.log(err);
      });  
  })    
  .catch(err => {
    console.log('an server error occurs');
    console.log(err);
  }); 
// catch 404 and forward to error handler


// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.send('An error occurs!');
// });

module.exports = app;
