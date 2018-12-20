const { Pool } = require('pg')
const url = require('url')
require('env2')('config.env')

let { DATABASE_URL, DATABASE_URL_TEST, NODE_ENV } = process.env
if (NODE_ENV === 'TEST') {
  DATABASE_URL = DATABASE_URL_TEST
}
if (!DATABASE_URL) {
  throw Error('No database URL')
}

const option = {
  connectionString: DATABASE_URL
}
const hostname = url.parse(DATABASE_URL).hostname
option.ssl = (hostname !== 'localhost')
module.exports = new Pool(option)
