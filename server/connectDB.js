const mongoose = require("mongoose");

const conn = mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e.message));

module.exports = { conn };
