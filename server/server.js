const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = require("./connectDB");
//
const server = express();
server.use(express.json());

// db connection
connectDB;
// models
const User = require("./models/User");

//
server.get("/", (req, res) => {
  res.status(200).json("test");
});

// sign up
server.post("/api/signup", async (req, res) => {
  const { username, email, phone, password } = req.body;
  const user = await User.create({
    username,
    email,
    phone,
    password,
  });
  res.status(200).json({ newUser: user });
});

// login
server.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    res.status(200).json({ foudUser: user });
  }
  if (!user) {
    res.status(400).json({ errorMessage: "username or password is Invalid" });
  }
});

server.listen(3300, () => {
  console.log(`server is up and running on port: 3300`);
});
