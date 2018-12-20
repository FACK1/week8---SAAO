const Joi = require('joi')

const validate = (validateCheck) => (req, res, next) => {
  const validateStatus = Joi.validate(req.body, validateCheck, { abortEarly: false })

  if (validateStatus.error) {
    console.log(validateStatus.error.details)
    req.error = validateStatus.error.details.map(error => {
      if (error.context.key === 'img_url') {
        error.message = 'Wrong url image please enter vaild one '
        return error.message
      } else if (error.context.key === 'description') {
        error.message = ' unreadable description of image please enter vaild one'
        return error.message
      }
    })
    next()
  } else { next() }
}

module.exports = validate
