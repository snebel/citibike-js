var express = require('express');
var http = require('http');
var logger = require('morgan');
var errorHandler = require('errorHandler');
var index = require('./routes/index');
var citibike = require('./routes/citibike');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname));  
app.set('port', process.env.PORT || 3000);

// set up routes
app.use(index);
app.use(citibike);

if (app.get('env') === 'development') {
  app.use(logger('dev'));
  app.use(errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});  
