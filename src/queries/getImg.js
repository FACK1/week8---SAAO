const db_connection = require("../database/db_connection");

const getImg = cb => {
  db_connection.query("select * from  image;", (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows);
    }
  });
};
module.exports = getImg;
