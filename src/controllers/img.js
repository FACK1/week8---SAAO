const getData = require('../queries/getImg.js')
const error = require('./error.js')
const addData = require('../queries/postImg.js')
const alert = require('alert-node')
exports.get = (req, res) => {
  getData((err, result) => {
    if (err) {
      error.serverErorr(null, req, res)
    } else {

        res.render('home', { data: result })
      
    }
  })
}

exports.post = (request, res) => {

  const { img_url, description } = request.body // eslint-disable-line camelcase
  if (request.error) {
    getData((err, result) => {
      if (err) {
        error.serverErorr(null, request, res)
      } else {

        res.render('home', { data: result, err: request.error })
      }
    })
  } else {
    addData(img_url, description, (err) => {
      if (err) {
        error.serverErorr(null, request, res)
      } else {
        res.locals.added="sucsses";
        console.log('here',res.locals.added);

        getData((err, result) => {
          if (err) {
            error.serverErorr(null, request, res)
          }
          else {
              res.render('home', { data: result,messege:res.locals.added });
          }
        })
      }
    })
  }
}
