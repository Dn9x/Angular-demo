/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , detail = require('./routes/detail')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  //app.set('view engine', 'ejs');
  app.set('view engine', 'html');
  app.engine('.html', require('ejs').__express);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/cont/:filename', routes.cont);
app.use(routes.index);
app.get('/home', detail.home);
app.get('/post', detail.post);
app.get('/join', detail.join);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

