const User = require("../models/User");
const bcrypt = require("bcrypt");
const config = require("../configurations/config");
const JWT = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("express-async-handler");
module.exports = {
  // signup
  signup: asyncHandler(async (req, res, next) => {
    const { username, email, phone, password } = req.body;

    // check if email already exist
    const emailExists = await User.exists({ email });
    if (emailExists) {
      return new ApiError("email already exist", 401);
    }

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
    res.status(201).json({ newUser: user });
  }),

  //   login
  login: asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    //
    const user = await User.findOne({ email });
    // check if the use exist
    if (!user) return next(new ApiError("email or password is Invalid", 401));
    // decrypt the passwird
    const cmparedPassword = await bcrypt.compare(password, user.password);
    if (!cmparedPassword)
      return next(new ApiError("email or password is Invalid", 401));
    // assign the token
    const token = JWT.sign({ user }, config.SECRET, { expiresIn: "1h" });
    // store the token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });
    //PS: exclude the password from bieng sent
    res.status(200).json({ foudUser: user, token: token });
  }),

  // logout
  logout: asyncHandler(async (req, res) => {
    // clear the cookie which removes the jwt token.
    cookie.clear();
    // when thier is no token the user does not have any authentication or autheriztion, so the client well redirect to '/'.
  }),
};
