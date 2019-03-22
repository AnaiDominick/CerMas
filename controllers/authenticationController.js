const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET || "key";

/* POST login. */ // Matches with "/api/login"
router.post('/', function (req, res, next) {

    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log(err);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }

            const token = jwt.sign(user.toJSON(), JWT_SECRET);
            // sessionStorage.setItem('token', token);
            return res.json({ user, token });
        });
    })
        (req, res);
});


module.exports = router;

// const express = require("express");
// const router = express.Router();
// const passport = require("../config/passport");

// const jwt = require('jsonwebtoken');

// //Use passport middleware to send people the right way
// router.post("/login", passport.authenticate("local", {
//     successRedirect: '/',
//     failureRedirect: '/login'
// })
// );

// // router.get("/logout", function(req,res){
// //     req.logout();
// //     res.redirect("/");
// // })


// //Prepare the file to output our router
// module.exports = router;
