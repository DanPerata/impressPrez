var mongoose = require('mongoose');
var Band = require('./bandModel');

var Venue = mongoose.model('venue', {
	name: String,
	location: String,
	bands:[Band]
});







module.exports = {
	venue: Venue,


	// Function does not work to send back one response in an ajax request
	// Can't use map. Need to find a different way without re-saving the venue objects 
	// possibly populate the user's venue array when the user logs in?
	filterVenues: function(venueIdArray, cb) {
		Venue.find({
			'_id': {$in: venueIdArray}
		}, cb);
	}

}