var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/indexController.js');
var venueController = require('./controllers/venueController.js');
var authenticationController = require('./controllers/authentication');
var mongoose = require('mongoose');

var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var passportConfig = require('./config/passport');

mongoose.connect('mongodb://localhost/jmpressLibPres');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.use(cookieParser());
app.use(flash());

app.use(session({secret: 'secret'}));
app.use(passport.initialize());
app.use(passport.session());

// Route to homepage
app.get('/', indexController.index);

// AJAX routes
app.get('/venue', venueController.get);

app.post('/venue', venueController.post);


// Our get request for viewing the login page
// app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);



var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
