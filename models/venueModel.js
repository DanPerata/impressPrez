var mongoose = require('mongoose');
var Band = require('./bandModel');

var Venue = mongoose.model('venue', {
	name: String,
	location: String,
	bands:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Band'
	}]
});


module.exports = Venue;
