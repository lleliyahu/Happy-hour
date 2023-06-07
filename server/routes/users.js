const { json } = require("express");
var express = require("express");
var router = express.Router();
var db = require("../DB/DbClient.js");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add", function (req, res, next) {
  console.log(req.body);
  var myobj = req.body;
  db.getDb()
    .collection("users")
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
      if (result.length === 0) {
        res.status(404);
        res.send("the user not valid");
      } else {
        res.status(200);
        res.send(result);
      }
    });
});

router.post("/updatePersonalData", function (req, res, next) {
  var myobj = req.body;
  console.log('personalData', myobj);
  var myquery = {'username': myobj.username };
  var newvalues = { $set: myobj };
  console.log('myquery : ', myquery);
  console.log('myobj : ', myobj);
  console.log('newvalues', newvalues);
  db.getDb()
    .collection("users")
    .updateOne(myquery, newvalues, function (err, respons) {
      if (err) {
        console.log('errrrrrrrrrrr');
        res.send(JSON.stringify(respons));
      }
      else {
        console.log('seeeeeeee');
        console.log("1 document updated");
        res.send(JSON.stringify(respons));
      }

    });
 
});


router.get("/personalData", async (req, res, next) => {
  var query = JSON.parse(req.query.body);
  db.getDb()
    .collection("users")
    .find(query)
    .toArray(function (err, result) {
      if (result.length === 0) {
        res.status(404);
        res.send("the user not valid");
      } else {
        res.status(200);
        res.send(result);
      }
    });
});


module.exports = router;
