const { json } = require("express");
var express = require("express");
var router = express.Router();
var db = require("../DB/DbClient.js");

router.post("/getStore", function (req, res, next) {
  var query = {};
  query.username = req.body.username;
  db.getDb()
    .collection("store")
    .find(query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listing");
      } else {
        res.send(result);
        console.log(result);
      }
    });
});

router.get("/getallStore", async (req, res, next) => {
  db.getDb()
    .collection("store")
    .find()
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listing");
      } else {
        res.send(result);
        console.log(result);
      }
    });
});

router.post("/getStoreData", function (req, res, next) {
  var query = {};
  query.storename = req.body.storename;
  console.log(query);
  db.getDb()
    .collection("store")
    .find(query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listing");
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
  var myquery = { 'storename': myobj.storename, 'username': myobj.usstorename };
  var newvalues = { $set: myobj };
  console.log('myquery : ', myquery);
  console.log('myobj : ', myobj);
  db.getDb()
    .collection("store")
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

router.post("/addMenuItem", function (req, res, next) {
  var myobj = req.body;
  console.log('myobj : ', myobj);
  var myquery = { 'storename': myobj.storename, 'username': myobj.username };
  var newvalues = { $addFields: { "menu": myobj.menu } };
  console.log('myquery : ', myquery);
  console.log('newvalues : ', newvalues);
  db.getDb()
    .collection("store")
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


router.post("/addOrders", function (req, res, next) {
  var myobj = req.body;
  console.log('req : ', req);
  console.log('myobj : ', myobj);
  var myquery = { 'storename': myobj.storename , 'menu.name': myobj.menuitem };
  var newvalues = { $inc: { 'menu.$.orders' : 1 } };
  console.log('myquery : ', myquery);
  
  db.getDb()
    .collection("store")
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
