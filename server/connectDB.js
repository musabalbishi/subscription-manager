const mongoose = require("mongoose");
const config = require("./configurations/config");

const conn = mongoose
  .connect(config.DB_URL)
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e.message));

module.exports = { conn };
