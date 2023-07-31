const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  // signup
  signup: async (req, res) => {
    const { username, email, phone, password } = req.body;

    // check if email already exist
    const emailExists = await User.exists({ email });
    if (emailExists)
      return res.status(400).json({ errorMessage: "email already exist" });

    // hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // create the user
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
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // check if the use exist
    if (!user)
      return res
        .status(400)
        .json({ errorMessage: "email or password is Invalid" });

    // decrypt the passwird
    try {
      await bcrypt.compare(password, user.password);
      res.status(200).json({ foudUser: user });
    } catch (error) {
      res.status(500).json({ errorMessage: error });
    }
  },
};
