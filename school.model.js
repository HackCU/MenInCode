'use strict';

var mongoose = require('mongoose');

var schoolSchema = new mongoose.Schema( {
	name: { type: String, trim: true },
	courses: [{
		name: { type: String, trim: true},
		asses: [{
			name: { type: String, trim: true},
			posts: [{
				text: { type: String, trim: true},
				upvotes: { type: Number },
				downvotes: { type: Number }
			}]
		}]
	}]
});

module.exports = mongoose.model('Schools', schoolSchema);
