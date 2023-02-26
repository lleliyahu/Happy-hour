var express = require('express');
var router = express.Router();
var db = require("../DB/DbClient.js");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function (req, res, next) {
  console.log(req.body);
  var myobj = req.body;
  db.getDb()
    .collection("users")
    .insertOne(myobj, function (err, res) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("1 document inserted");
      }

    });
})

module.exports = router;
