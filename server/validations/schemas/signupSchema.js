const Joi = require("joi");

const signupValidation = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(9).max(9).required(),
  password: Joi.string().min(6).required(),
});

module.exports = signupValidation;
