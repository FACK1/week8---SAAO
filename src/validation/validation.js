const Joi = require('joi')

const formValidation = {
  img_url: Joi.string().uri().trim().required(),
  description: Joi.string().required().regex(/^[a-zA-Z0-9]/)
}

module.exports = { formValidation }
