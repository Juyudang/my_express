var express = require('express');
var router = express.Router();

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}
var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}
var cb2 = function (req, res, next) {
  console.log('CB2');
  next();
}

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

router.use(myLogger); // 밑에 test page가 출력되고 안되고가 이 코드의 위치에 결정됨

router.get('/', function (req, res) {
  res.send('test page')
  // res.send('root');    // 아래 무시됨
})

router.post('/', function (req, res) {
  res.send('you posted')
})

router.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next();
})

router
  .get('/abc?d', function (req, res) {
    res.send('abc?d -> ab(c)d')
  })
  .get('/cd+ef', function (req, res) {
    res.send('cd+ef -> cd(d*n)ef')
  });

router.get('/example/b', function (req, res, next) {
  console.log("example")
  next()
}, function (req, res) {
  res.send("example/b exec.")
});

router.get('/example/c', [cb0, cb1, cb2]);

module.exports = router;