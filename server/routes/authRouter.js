const router = require("express").Router();
const controller = require("../controllers/authController");
// sign up
router.post("/signup", controller.signup);

// login
router.post("/login", controller.login);

module.exports = router;
