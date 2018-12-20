exports.pageNotFound = (req, res) => {
  res.status(404)
  res.render('404')
}

exports.serverErorr = (error, req, res, next) => { // eslint-disable-line handle-callback-err
  res.status(500)
  res.render('500')
}
