const User = require("../models/User");

module.exports = {
  // signup
  signup: async (req, res) => {
    const { username, email, phone, password } = req.body;
    const user = await User.create({
      username,
      email,
      phone,
      password,
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
