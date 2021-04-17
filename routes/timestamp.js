var express = require('express');
var router = express.Router();

var requestTime = function (req, res, next) {
  req.requestTime = Date();
  next();
};

router.use(requestTime);

router.get('/', function (req, res) {
  var responseText = 'Timestamp middle?';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

module.exports = router;