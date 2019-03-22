//Bring in passport into the file
const passport = require("passport");
//Bring in the passport-local package, specifically it's Strategy module
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const JWT_SECRET = process.env.JWT_SECRET || "key";

//Set up a new passport instance with our custom local strategy
passport.use(new LocalStrategy(
  //Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email",
    passwordField: 'password'
  },
  function (email, password, done) {
    //When a user tries to sign in this code runs
    db.User.findOne({
      // email: email,
      // password: password
      email
    }, function (error, dbUser) {
      //If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect Credentials."
        });
      }
      //If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.login(password)) {
        return done(null, false, {
          message: "Incorrect Credentials."
        });
      }

      //If none of the above, the credentials are valid, return the user
      // return done(null, dbUser);
      return done(null, dbUser, {
        message: 'Logged In Successfully'
      })

      //if error
      // .catch(err => {
      //   return done(err);
      // });
    });
  })
);

//JWT
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
},
  function (jwtPayload, done) {
    //find the user in db if needed
    return UserModel.findOneById(jwtPayload.id)
      .then(user => {
        return done(null, user);
      })
      .catch(err => {
        return done(err);
      });
  }

));


//Serialize the user into a session string
passport.serializeUser(function (user, callback) {
  callback(null, user);
});

//Process the session string and get the user
passport.deserializeUser(function (obj, callback) {
  callback(null, obj);
});

//Take out our configured passport instance
module.exports = passport;