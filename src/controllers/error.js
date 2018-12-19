const path = require('path');

exports.pageNotFound =(req,res)=>{
 res.status(404);
 res.render("404");
};

exports.serverErorr =(error,req,res,next)=>{
 res.status(500);
 res.render("500");
};
