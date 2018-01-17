var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/post/:id', function(req, res, next) {
  res.render('post', { id: req.params.id });
});

router.get("/profile", function (req,res) {
  res.render('profile')
})

router.get("/work", function (req,res) {
  res.render('work')
})

module.exports = router;
