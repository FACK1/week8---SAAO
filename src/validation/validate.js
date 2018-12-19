const Joi = require('joi');

const validate = (validateCheck) => (req, res, next) => {
  const validateStatus = Joi.validate(req.body, validateCheck, { abortEarly: false });

  if (validateStatus.error){
   console.log(validateStatus.error.details)
    req.error=validateStatus.error.details.map(error =>{
    if (error.context.key ==='img_url') {
    return   error.message='Wrong url image please enter vaild one ';
  }else if (error.context.key=='description') {
    return   error.message=' unreadable description of image please enter vaild one';

  }
    });
    next();
  }
  else
    next();
};

module.exports = validate
