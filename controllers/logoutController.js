const router = require("express").Router();

// Matches with "/api/logout"
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
})

module.exports = router;