var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* POST transition to class page */
router.post('/gotoclass', function(req, res) {
	//do fuzzy logic here for class

	//if successful, needs school and course object
	res.redirect('/school/course');
});

/* GET list of assignments for the course */
router.get('/:school/:course', function(req, res) {
	var school = req.params.school;
	var course = req.params.course;

	//needs school, course, and asses objects
	res.render('course', {school: school, course: course});
});

router.get('/:school/:course/new', function(req, res) {
	var school = req.params.school;
	var course = req.params.course;

});

/* GET the discussion page for an assignment */
router.get('/:school/:class/:ass', function(req, res) {
	var school = req.params.school;
	var course = req.params.course;
	var ass = req.params.ass;

	//needs school, course, ass
	res.render('ass', {school: school, course: course, ass: ass});
});

/* GET the list of board posts */
router.get('/:school/:class/:assignment/board/', function(req, res) {

	res.json("cs");
});

/* POST a new entry to the board */
router.post('/:school/:class/:assignment/board/add', function(req, res) {

	res.json("cs");
});

/* POST a new upvote to a board item */
router.post('/:school/:class/:assignment/board/up', function(req, res) {
	res.json("cs");
});

/* POST a new downvote to a board item */
router.post('/:school/:class/:assignment/board/down', function(req, res) {
	res.json("cs");
});

module.exports = router;
