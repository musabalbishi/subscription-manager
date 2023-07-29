const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validateInputs } = require("../validations/validator");

module.exports = {
  // signup
  signup: async (req, res) => {
    const { username, email, phone, password } = req.body;

    // validate the inputs
    const { error, value } = validateInputs(req.body);
    if (error) {
      console.log(error);
      return res.send(error.details);
    }

    // check if email already exist
    const emailExists = await User.exists({ email });
    if (emailExists)
      return res.status(400).json({ errorMessage: "email already exist" });

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });
    res.status(200).json({ newUser: user });
  },

  //   login
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
      res.status(200).json({ foudUser: user });
    }
    if (!user) {
      res.status(400).json({ errorMessage: "username or password is Invalid" });
    }
  },
};
