// Dependencias
var express = require('express');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var favicon = require('favicon');
var fs = require('fs');
var multer = require('multer');

// Base de datos MongoDB
var db = require('./db/db.js');
db.conectar(); //Conecto a la base de datos
var app = express();

// require todos los modelos
fs.readdirSync(__dirname+ '/models').forEach(function(filename){
  if (~filename.indexOf('.js')) require(__dirname+'/models/'+filename);
});

// middlewares
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//habilita cors en toda la api
app.use(cors());

// app.use(logger('dev'));
app.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

// routes API
app.use('/', require('./routes'));

// ERROR HANDLERS

//catch 404 and forward to error handler
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
      res.send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
    res.send('error', {
    message: err.message,
    error: {}
  });
});

// Start the server
app.set('port', process.env.PORT || 8000);//Puerto para express

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;