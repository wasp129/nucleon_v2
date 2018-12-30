// server.js

var express = require("express");
var bodyParser = require("body-parser");
var chalk = require("chalk");
var mongoose = require("mongoose");
var path = require('path');
var dotenv = require("dotenv").config();
var user = require("./routes/user");
var assessment = require("./routes/assessment");
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var passport = require('./passport');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;
var db = process.env.MONGODB_URI;

mongoose.Promise = global.Promise

mongoose.connect(db, { useNewUrlParser: true }, function (err) {
	if (err) {
		console.log(chalk.red("Error connecting to database: " + err))
	} else {
		console.log(chalk.green("========== Connection state to database: " + mongoose.connection.readyState + "=========="));
	}
})

// ====SESSIONS====
app.use(
	session({
		secret: 'gallant-fox',
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		resave: false, 
		saveUninitialized: false 
	})
)

// ====PASSPORT====
app.use(passport.initialize())
app.use(passport.session()) 

// ====ROUTES==== 	
app.use('/user', user);		
app.use('/assessment', assessment);		

// ====SERVE BUILD FOLDER====
app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', (req, res) => res.sendFile(path.resolve('../client/build', 'index.html')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});	


app.listen(port);
console.log(chalk.green("========== It's going down on port " + port + " =========="));
