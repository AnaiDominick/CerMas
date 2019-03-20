require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;
const app = express();
var user = require('./routes/api/user');
const routes = require("./routes");
const passport = require("./config/passport");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(routes);
app.use('/csv', passport.authenticate('jwt', { session: false }), user);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

