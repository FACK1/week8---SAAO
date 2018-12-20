const dbConnection = require('../database/db_connection')

const postImg = (url, description, cb) => {
  const setImgQuery =
    'INSERT INTO image (url, description) VALUES ($1, $2);'
  dbConnection.query(setImgQuery, [url, description], error => {
    if (error) {
      cb(error)
    } else {
      cb(null)
    }
  })
}

module.exports = postImg
