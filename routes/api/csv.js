const router = require("express").Router();
const csvController = require("../../controllers/csvController");

// Matches with "/api/user"
router.route("/")
    .get(csvController.findAll)
    .post(csvController.create);

// // Matches with "/api/user"
// router.route("/populate")
//     .post(csvController.populate);

module.exports = router;
