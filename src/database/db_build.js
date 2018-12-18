const fs = require('fs');
const dbConnection = require('./db_connection');

const buildFile = fs.readFileSync(`${__dirname}/db_build.sql`, 'utf8');

dbConnection.query(buildFile, (error) => {
  if (error) {
    console.log('Failed', error);
  } else {
    console.log('Success!');
    dbConnection.end(() => console.log('Connection Closed'));
  }
});
