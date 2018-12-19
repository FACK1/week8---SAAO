const getData=require('../queries/getImg.js')
const error=require('./error.js');
const addData= require('../queries/postImg.js')
const queryString = require('querystring');
const alert = require('alert-node')
exports.get=(req,res)=>{

  getData((err, result)=>{
    if (err) {
      error.serverErorr(null, req,res);
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
  console.log("img",img);
  console.log("des",des);
	if (err) {
    console.log("1",err);
		error.serverErorr(null, request, res);
	}
	addData(img, des, (err) => {
		if (err) {
      console.log("2",err);
			error.serverErorr(null, request, res);
		} else {
      alert("we have added a new image to the db");

    res.redirect("/")
		}
	});
})
}
