const schemas = require("../schema");

exports.loginValidation = (req, res, next) => {
  const body = req.body;
  const { error } = schemas.login.validate(body, {
    abortEarly: false,
  });
  if (error)
    return res.status(400).json({ errorMessage: error.details[0].message });
  next();
};
exports.signupValidation = (req, res, next) => {
  const body = req.body;
  const { error } = schemas.signup.validate(body, {
    abortEarly: false,
  });
  if (error)
    return res.status(400).json({ errorMessage: error.details[0].message });
  next();
};
