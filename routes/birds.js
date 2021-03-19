var express = require('express');
var router = express.Router();

let data = {
  message: 'about'
};

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(rea, res) {
  res.send('Birds home page');
});

router
  .get('/data', function(req, res) {
    res.json(data);
  })
  .post('/data', function(req, res) {
    data.message = 'modified';
    res.json(data);
  });

  //  get params, query string
router
  .get('/find/:id', function(req, res) {
    console.log("get :id " + req.params.id)
    res.send("your id : " + req.params.id)
  })
  .get('/find/:id/pwd/:pwd', function (req, res) {
    res.send("id -> " + req.params.id + "pwd -> " + req.params.pwd)
  })
  .get('/artists', function(req, res) {
    console.log("아티스트 이름 받기 :" + req.query.name)
    res.send("name -> " + req.query.name)
  });

//  post params, query string : x-www-form-urlencoded
router
  .post("/postname", function (req, res) {
    res.send("new user -> " + req.body.name)
  });

module.exports = router;