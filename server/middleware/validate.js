const schemas = require("../models/schema");
const ApiError = require("../utils/ApiError");

exports.loginValidation = (req, res, next) => {
  const body = req.body;
  const { error } = schemas.login.validate(body, {
    abortEarly: false,
  });
  if (error)
    return res.status(400).json({ errorMessage: error.details[0].message });
  next();
};

(exports.signupValidation = (req, res, next) => {
  const body = req.body;
  const { error } = schemas.signup.validate(body, {
    abortEarly: false,
  });
  if (error)
    return res.status(400).json({ errorMessage: error.details[0].message });
  next();
}),
  (exports.subscriptionValidation = (req, res, next) => {
    const body = req.body;
    const { error } = schemas.subscription.validate(body, {
      abortEarly: false,
    });
    if (error)
      return res.status(400).json({ errorMessage: error.details[0].message });
    // next(
    //   ApiError(`validationn error: ${error.details[0].message}`, 400)
    // );
    next();
  });
