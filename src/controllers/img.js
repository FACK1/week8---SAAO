const path = require('path');
const getData=require('../queries/getImg.js')
const error=require('./error.js');
exports.get=(req,res)=>{

  getData((err, result)=>{
    if (err) {
      error.serverErorr(req,res);
    }else {
    res.render("home",{data:result});
    }
  })
};
