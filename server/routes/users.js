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
    .insertOne(myobj, function (err) {
      if (err) {
        res.status(500);
        res.send("error");
      }
      else {
        console.log("1 document inserted");
        res.status(200);
        res.send("1 document inserted");
      }

    });
})


router.get('/Checkuser', function (req, res, next) {
  console.log(req.query.newUser.email);

  var query = { email: req.query.newUser.email , password: req.query.newUser.password };

  db.getDb()
    .collection("users")
    .find(query).toArray(function(err, result) {
      console.log(result);
      if (result.length === 0 ) {
        res.status(404);
        res.send('the user not valid');
      } 
      else {
        res.status(200);
        res.send(result);
      }
    
    });
})

module.exports = router;
