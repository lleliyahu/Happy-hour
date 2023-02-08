var express = require("express");
var router = express.Router();
var db = require("../DB/DbClient.js");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/all", function (req, res, next) {
  var query = {};
  console.log("loggggggg", db);
  db.getDb()
    .collection("Deals")
    .find(query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listing");
        console.log(result);
      } else {
        res.send(result);
      }
    });
  //  message = [ {
  //     "store": "aaaaaa",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "aaaa  i hi"
  //   },
  //   {
  //     "store": "bbbbb",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "bbbb  hi hi"
  //   },
  //   {
  //     "store": "ddddd",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "bbbb  hi hi"
  //   },
  //   {
  //     "store": "bbbbb",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "bbbb  hi hi"
  //   },
  //   {
  //     "store": "bbbbb",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "bbbb  hi hi"
  //   },
  //   {
  //     "store": "bbbbb",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "bbbb  hi hi"
  //   },
  //   {
  //     "store": "bbbbb",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "bbbb  hi hi"
  //   },
  //   {
  //     "store": "cccc",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "cccc hi hi"
  //   },
  //   {
  //     "store": "cccc",
  //     "start_time": "01.01.2222",
  //     "end_time": "01.01.2222",
  //     "discount": 10,
  //     "message": "cccc hi hi"
  //   }
  // ];
});

module.exports = router;
