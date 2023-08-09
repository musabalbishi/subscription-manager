const JWT = require("jsonwebtoken");
const config = require("../configurations/config");
const ApiError = require("../utils/ApiError");

const verifyToken = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders.split(" ")[1];

  JWT.verify(token, config.ACCESS_TOKEN_SECRET, (error, payload) => {
    if (error) {
      error.name === "JsonWebTokenError"
        ? next(new ApiError("Unauthorized", 401))
        : next(new ApiError(error.message, 401));
    }
    req.payload = payload;
    next();
  });
};

module.exports = verifyToken;
