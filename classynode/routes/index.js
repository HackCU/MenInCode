var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/:school', function(req, res) {
	res.render('school');
});

router.get('/:school/:class', function(req, res) {
	res.render('class');
});

router.get('/:school/:class/:assignment', function(req, res) {
	res.render('ass');
});

router.get('/:school/:class/:assignment/board/', function(req, res) {
	res.json("cs");
});

router.post('/:school/:class/:assignment/board/add', function(req, res) {
	res.json("cs");
});

router.post('/:school/:class/:assignment/board/up', function(req, res) {
	res.json("cs");
});

router.post('/:school/:class/:assignment/board/down', function(req, res) {
	res.json("cs");
});

module.exports = router;
