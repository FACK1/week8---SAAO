const dbConnection = require('../database/db_connection')

const getImg = cb => {
  dbConnection.query('select * from  image;', (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(null, data.rows)
    }
  })
}
module.exports = getImg
