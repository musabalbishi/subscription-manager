const express = require("express");
const connectDB = require("./connectDB");
//
const server = express();
server.use(express.json());

// db connection
connectDB;

//
const authRouter = require("./routes/authRouter");
const config = require("./configurations/config");
server.use("/api", authRouter);

server.listen(3300, () => {
  console.log(`server is up and running on port: ${config.PORT}`);
});
