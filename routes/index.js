var express = require('express');
var router = express.Router();
var School = require('../school.model');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* POST transition to class page */
router.post('/gotoclass', function(req, res) {

	//do fuzzy logic here for class
	var school = req.body.school_name.toLowerCase();
	var city = req.body.school_city.toLowerCase();
	var squish = school + "-" + city;
	var course = req.body.school_course.toLowerCase();

	School.findOne( { name: squish }, function(err, result) {
		if (err) {console.log("gotoclass: error finding school");}
		if (result) {

			console.log("gotoclass: found result");

			//find course in the courses array, ret -1 if not found
			var course_position = result.courses.map(function(x) {return x.name}).indexOf(course);
			if ( course_position < 0 ) {
				console.log("gotoclass: course not found");
				result.courses.push( { name: course } );
				result.markModified('result.courses');
				result.save( function(err) {
					console.log("gotoclass: course created");
					res.redirect( "/" + squish + "/" + course );
				})
			} else {
				console.log("gotoclass: course already existed");
				res.redirect( "/" + squish + "/" + course );
			}
		

		} else {

			console.log("gotoclass: creating new course");
			var new_school = new School({
				name: squish,
				courses: [{ 
					name: course
				}]
			})
			new_school.save( function(err) {
				if (err) {console.log("gotoclass: error saving new_school");}
				res.redirect( "/" + squish + "/" + course );
			})

		}
	});
	
});

/* GET list of assignments for the course */
router.get('/:school/:course', function(req, res) {
	var school = req.params.school;
	var course = req.params.course;

	School.findOne( { name: school }, function(err, result) {
		if (err) { console.log(err); };
		if (result) {

			var course_position = result.courses.map(function(x) {return x.name}).indexOf(course);
			if (course_position >= 0) {
				res.render('course', {
					school: school,
					course: result.courses[course_position]
				});
			} else {
				res.redirect("/", { err: "Something with that address wasn't quite right. Please try again!"} );
			}
			
		} else {
			res.redirect("/", { err: "Something with that address wasn't quite right. Please try again!"} );
		}
	})

});

router.get('/:school/:course/new', function(req, res) {
	var school = req.params.school;
	var course = req.params.course;

	School.findOne( { name: school }, function(err, result) {
		if (err) { console.log(err); };
		if (result) {

			var course_position = result.courses.map(function(x) {return x.name}).indexOf(course);
			if (course_position >= 0) {
				res.render('new_ass', {
					school: school,
					course: result.courses[course_position]
				});
			} else {
				res.redirect("/", { err: "Something with that address wasn't quite right. Please try again!"} );
			}
			
		} else {
			
		}
	});

});

/* POST make new assignment */
router.post('/:school/:course/new', function(req, res) {
	var school = req.params.school;
	var course = req.params.course;
	var ass = req.body.ass_name.toLowerCase();

	School.findOne( { name: school }, function(err, result) {
		if (err) { console.log(err); };
		if (result) {

			var course_position = result.courses.map(function(x) {return x.name}).indexOf(course);
			if (course_position >= 0) {
				var ass_position = result.courses[course_position].asses.map(function(x) {return x.name}).indexOf(ass);
				if (ass_position < 0) {
					result.courses[course_position].asses.push( { name: ass } );
					result.markModified('result.courses.asses');
					result.save( function(err) {
						console.log(result);
						res.redirect( "/" + school + "/" + course + '/' + ass );
					});
				} else {
					res.render('new_ass', {
						school: school,
						course: result.courses[course_position],
						err: "That assignment already exists!"
					});
				}
			} else {
				res.render("index", { err: "Something with that address wasn't quite right. Please try again!"} );
			}
			
		} else {
			res.render("index", { err: "Something with that address wasn't quite right. Please try again!"} );
		}
	});
	

});

/* GET the discussion page for an assignment */
router.get('/:school/:course/:ass', function(req, res) {
	var school = req.params.school;
	var course = req.params.course;
	var ass = req.params.ass;

	School.findOne( { name: school }, function(err, result) {
		if (err) { console.log(err); };
		if (result) {

			console.log("ass: found result");
			var course_position = result.courses.map(function(x) {return x.name}).indexOf(course);
			if (course_position >= 0) {
				console.log("ass: found course");
				var ass_position = result.courses[course_position].asses.map(function(x) {return x.name}).indexOf(ass);
				if (ass_position >= 0) {
					console.log("ass: found ass");
					res.render('ass', {
						school: school,
						course: result.courses[course_position],
						ass: result.courses[course_position].asses[ass_position]
					});
				} else {
					res.redirect('/' + school + '/' + course );
				}
			} else {
				res.render("index", { err: "Something with that address wasn't quite right. Please try again!"} );
			}
			
		} else {
			res.render("index", { err: "Something with that address wasn't quite right. Please try again!"} );
		}
	});
	
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
