'use strict';


const express = require('express'),
	load = require('express-load'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose'),
	favicon = require('static-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	expressValidator = require('express-validator'),
	app = express();

//conexão com o mongodb
mongoose.connect('mongodb://localhost/nweets', (err) => {
	if (err) console.log("Erro ao conectar no mongodb: " + err);
	else console.log("Conexão com o mongodb efetuada com sucesso!");
});

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
app.use(session({
	secret: 'Diego'
}));
app.use(express.static(path.join(__dirname, 'public')));

load('models').
then('controllers').
then('routes').
into(app);

app.listen(3000, () => {
	console.log('Express server listening on port 3000');
});
