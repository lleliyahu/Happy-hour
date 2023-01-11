var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', function(req, res, next) {

     message = [ {
        "store": "aaaaaa",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "aaaa  i hi"
      },
      {
        "store": "bbbbb",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "bbbb  hi hi"
      },
      {
        "store": "ddddd",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "bbbb  hi hi"
      },
      {
        "store": "bbbbb",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "bbbb  hi hi"
      },
      {
        "store": "bbbbb",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "bbbb  hi hi"
      },
      {
        "store": "bbbbb",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "bbbb  hi hi"
      },
      {
        "store": "bbbbb",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "bbbb  hi hi"
      },
      {
        "store": "cccc",
        "start_time": "01.01.2222",
        "end_time": "01.01.2222",
        "discount": 10,
        "message": "cccc hi hi"
      } ];

    res.send( message);
  });

module.exports = router;
