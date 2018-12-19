const Joi = require('joi');

const formValidation = {
    img_url: Joi.string().required(),
    description: Joi.string().required()
};

module.exports = {formValidation}
