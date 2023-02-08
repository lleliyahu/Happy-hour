var db = require("./DbConnection.js");

if (con == undefined) {
  var con = db.connectToServer();
  console.log(con);
}

module.exports = db;
