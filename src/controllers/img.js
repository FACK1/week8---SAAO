const getData=require('../queries/getImg.js')
const error=require('./error.js');
const addData= require('../queries/postImg.js')
const queryString = require('querystring');
const alert = require('alert-node')
exports.get=(req,res)=>{

  getData((err, result)=>{
    if (err) {
      error.serverErorr(req,res);
    }else {
    res.render("home",{data:result});
    }
  })
};

exports.post = (request, res) => {
  const {img_url, description} = request.body;
  console.log(request.body);
  // console.log('here1',img_url,description);
	addData(img_url, description, (err) => {
		if (err) {
			error.serverErorr(req, res);
		} else {
      alert("we have added a new image to the db");
      res.redirect("/")
		}
	});
};
