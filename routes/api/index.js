const router = require("express").Router();
const exampleRoutes = require("./example");
const userRoutes = require("./user");
// const authenticateRoutes = require("./authentication");
const loginRoutes = require("../../controllers/authenticationController");
const csvRoutes = require("./csv");
const logoutRoutes = require("../../controllers/logoutController");

// Example routes
router.use("/example", exampleRoutes);
router.use("/user", userRoutes);
// router.use("/authenticate", authenticateRoutes);
router.use("/login", loginRoutes);
router.use("/userIndex", csvRoutes);
// router.use("/populateduser", csvRoutes);
router.use("/logout", logoutRoutes);

module.exports = router;
