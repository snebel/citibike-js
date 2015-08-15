var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var index = require('./routes/index');
var citibike = require('./routes/citibike');

var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname));  
app.set('port', process.env.PORT || 3000);

// set up routes
app.use(index);
app.use(citibike);

var server = app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});  

module.exports = {  
  server: server 
};
