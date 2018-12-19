const Joi = require('joi');

const validate = (validateCheck) => (req, res, next) => {
  const validateStatus = Joi.validate(req.body, validateCheck, { abortEarly: false });

  if (validateStatus.error){
    req.error=validateStatus.error;
    next();
  }
  else
    next();
};

module.exports = validate
