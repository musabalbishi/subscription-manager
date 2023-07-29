const Joi = require("joi");
const signupValidation = require("./schemas/signupSchema");
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

exports.validateInputs = validator(signupValidation);
