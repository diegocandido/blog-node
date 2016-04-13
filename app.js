var express      = require('express');
var load         = require('express-load');
var http         = require('http');
var path         = require('path');
var mongoose     = require('mongoose');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
expressValidator = require('express-validator');

//conexão com o mongodb
mongoose.connect('mongodb://localhost/nwitter"', function(err){
	if(err){
		console.log("Erro ao conectar no mongodb: "+err);
	}else{
		console.log("Conexão com o mongodb efetuada com sucesso!");
	}
});

var app = express();

// all environments
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressValidator());
app.use(cookieParser());
app.use(session({ secret: 'Diego' }));
app.use(express.static(path.join(__dirname, 'public')));

load('models').
then('controllers').
then('routes').
into(app);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});
