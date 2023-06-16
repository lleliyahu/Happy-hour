var express = require("express");
var router = express.Router();
var db = require("../DB/DbClient.js");
var ObjectId = require('mongodb').ObjectId; 
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/all", function (req, res, next) {
  var query = {};
  db.getDb()
    .collection("Deals")
    .find(query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listing");
      } else {
        res.send(result);
      }
    });
 
});

router.get("/storeDeals", function (req, res, next) {
  var query = JSON.parse(req.query.store);
  console.log(query)
  db.getDb()
    .collection("Deals")
    .find(query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listing");
      } else {
        res.send(result);
      }
    });
 
});

router.post("/create", function (req, res, next) {
  console.log(req.body);
  var myobj = req.body;
  db.getDb()
    .collection("Deals")
    .insertOne(myobj, function (err) {
      if (err) {
        res.status(500);
        res.send("error");
      } else {
        console.log("1 document inserted");
        res.status(200);
        res.send("1 document inserted");
      }
    });
  });

  router.post("/addlike", function (req, res, next) {
    var myobj = req.body.deal_id;
    console.log('myobj : ', myobj);
    var myquery = { '_id': new ObjectId(myobj)};
    var newvalues = { $inc: { 'like_counter' : 1 } };
    console.log('myquery : ', myquery);
    
    db.getDb()
      .collection("Deals")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(res);
          console.log("1 document updated");
        }
  
      });
    res.send(JSON.stringify(req.body));
  });

module.exports = router;
