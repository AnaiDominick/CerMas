const router = require("express").Router();
const passport = require("../../config/passport");

// Matches with "/api/example"
router.route("/login")
    .post(
        function (req, res) {
            passport.authenticate("local", {
                successRedirect: '/csv',
                failureRedirect: '/login'
            });
        }
    )

// Matches with "/api/example/:id"

module.exports = router;