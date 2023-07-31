const router = require("express").Router();
const controller = require("../controllers/authController");
const validate = require("../middleware/validate");
// sign up
router.post("/signup", validate.signupValidation, controller.signup);

// login
router.post("/login", validate.loginValidation, controller.login);

module.exports = router;
