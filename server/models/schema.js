const Joi = require("joi");

const signup = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(9).max(9).required(),
  password: Joi.string().min(6).required(),
});

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const subscription = Joi.object({
  subscriptionName: Joi.string(),
  value: Joi.number().min(1).required(),
  cycle: Joi.string().required(),
  startDate: Joi.string().required(),
  alertNotice: Joi.string().required(),
  alertType: Joi.string().required(),
  isActive: Joi.boolean(),
});

module.exports = { login, signup, subscription };
