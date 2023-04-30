const { json } = require("express");
var express = require("express");
var router = express.Router();
var db = require("../DB/DbClient.js");

/* GET users listing. */
router.post("/getStore", function (req, res, next) {
  var query = {};
  console.log("user", req);
  query.username = req.body.username;
  db.getDb()
    .collection("store")
    .find(query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listing");
        console.log(result);
      } else {
        res.send(result);
        console.log(result);
      }
    });
});

router.post("/create", function (req, res, next) {
  console.log(req.body);
  var myobj = req.body;
  db.getDb()
    .collection("store")
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

router.get("/Checkuser", async (req, res, next) => {
  var query = JSON.parse(req.query.user);
  console.log(query);

  db.getDb()
    .collection("users")
    .find(query)
    .toArray(function (err, result) {
      console.log(result);
      if (result.length === 0) {
        res.status(404);
        res.send("the user not valid");
      } else {
        res.status(200);
        res.send(result);
      }
    });
});


router.post("/update", function (req, res, next) {
    var myobj = req.body;
    var myquery = { 'storename' : myobj.storename , 'username' : myobj.usstorename  };
    var newvalues = { $set: myobj };
    console.log('myquery : ' ,myquery);
    console.log('myobj : ' ,myobj);
    db.getDb()
    .collection("store")
    .updateOne(myquery,newvalues, function(err, res) {
      if (err) {
        console.log(err);}
        else{
          console.log(res);
          console.log("1 document updated");
        }
      
    });
    res.send(JSON.stringify(req.body));
});

router.post("/addMenuItem", function (req, res, next) {
  var myobj = req.body;
  var myquery = { 'storename' : myobj.storename , 'username' : myobj.usstorename  };
  var newvalues = { $addFields: myobj.menu };
  console.log('myquery : ' ,myquery);
  console.log('myobj : ' ,myobj);
  db.getDb()
  .collection("store")
  .updateOne(myquery,newvalues, function(err, res) {
    if (err) {
      console.log(err);}
      else{
        console.log(res);
        console.log("1 document updated");
      }
    
  });
  res.send(JSON.stringify(req.body));
});

module.exports = router;
