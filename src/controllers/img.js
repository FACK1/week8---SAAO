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

let data = '';
request.on('data', chunk => {
	data += chunk;
});
request.on('end', (err) => {
	const {img,des} = queryString.parse(data);
	if (err) {
		error.serverErorr(req, res);
	}
	addData(img, des, (err) => {
		if (err) {
			error.serverErorr(req, res);
		} else {
      alert("we have added a new image to the db");

    res.redirect("/")
		}
	});
})
}
