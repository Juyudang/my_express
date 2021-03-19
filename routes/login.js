var express = require('express');
var router = express.Router();

router.param('user_id', function (req, res, next, id) {
  req.user = {
    id: id,
    name: 'TJ'
  }
  next()
})

router.route('/users/:usr_id')
  .all(function(req, res, next) {
    next()
  })
  .get(function(req, res, next) {
    res.json(req.user)
  })
  .put(function(rea, res, next) {
    req.user.name = req.params.name
    res.json(req.user)
  })
  .post(function(req, res, next) {
    next(new Error('not implemented'))
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'))
  })