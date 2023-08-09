const express = require("express");
const dbConnection = require("./configurations/dbConnection");
const config = require("./configurations/config");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const ApiError = require("./utils/ApiError");

//
const server = express();
server.use(cookieParser());
server.use(express.json());

// database connection
dbConnection;

//
const authRoutes = require("./routes/authRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

//
server.use("/api/v1", authRoutes);
server.use("/api/v1", subscriptionRoutes);

// Error Handler
server.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 404));
});

// global error handling
server.use(globalErrorHandler);
const app = server.listen(3300, () => {
  console.log(`server is up and running on port: ${config.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection Error: ${err.name}, 
    ${err.message}
  `);
  app.close(() => {
    console.error("Shutting down ...");
    process.exit(1);
  });
});
