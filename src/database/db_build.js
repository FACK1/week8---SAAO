const fs = require('fs')
const dbConnection = require('./db_connection')

const buildFile = fs.readFileSync(`${__dirname}/db_build.sql`, 'utf8')
const buildDB = (cb) => {
  dbConnection.query(buildFile, (error) => {
    if (error) {
      console.log('Failed', error)
    } else {
      console.log('Success! Database built')
      if (cb) {
        cb()
      } else {
        dbConnection.end(() => console.log('Connection Closed'))
      }
    }
  })
}
// buildDB();
module.exports = buildDB
