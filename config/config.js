const express = require("express");

//Bring in the handlebars middleware for express.
const expresshbs = require('express-handlebars');

//Bring all the contents form the /models
//directory and put it inside a global named
//models.
global.models = require('../models');

const passport = require("./passport");
const session = require("express-session");


module.exports = function (app) {

  //Sets up the session storage for our application
  app.use(session(
    {
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: true
    })
  );

  //Let our server know that we'll be using
  //the passport middleware for our authentications
  app.use(passport.initialize());
  app.use(passport.session());

  //Allows our server to receive information from the outside world
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  //Load our routes into the server
  require('./routes')(app);
}