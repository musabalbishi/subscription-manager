const express = require("express");
const connectDB = require("./connectDB");
const config = require("./configurations/config");
//
const server = express();
server.use(express.json());

// db connection
connectDB;

//
const authRoutes = require("./routes/authRoutes");
server.use("/api", authRoutes);

server.listen(3300, () => {
  console.log(`server is up and running on port: ${config.PORT}`);
});
