const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

 /* Middleware */
 app.use(express.json());
 app.use(express.static('public'));
 app.use(logger('dev'));

 app.use((req, res, next) => {
	res.locals.data = {};
	next();
});

app.use(logger('dev')) // Everytime we make a request, we get a log
app.use(favicon(path.join(__dirname, 'public',"img", "logo.png")))
app.use(express.static(path.join(__dirname, "public")))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))})

module.exports = app 