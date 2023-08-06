const mongoose = require("mongoose");
const config = require("./config");

const dbConnection = mongoose
  .connect(config.DB_URL)
  .then(() => console.log("database connected successfully"));

module.exports = dbConnection;
