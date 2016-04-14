'use strict';
/**
 * Required Modules
 * @author Diego Candido and Rodrigo Oler
 * @version 1.0.1
 * @param  {[type]} 'express' [express module]
 * @param  {[type]} 'load' [express-load module]
 * @param  {[type]} 'http' [http module]
 * @param  {[type]} 'path' [path module]
 * @param  {[type]} 'mongoose' [mongoose module]
 * @param  {[type]} 'favicon' [static-favicon module]
 * @param  {[type]} 'logger' [morgan module]
 * @param  {[type]} 'logger' [morgan module]
 */
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

/**
 * [connect description]
 * @param  {[type]} 'mongodb:	if (err          [description]
 * @return {[type]}              [description]
 */
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
