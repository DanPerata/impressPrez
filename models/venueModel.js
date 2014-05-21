var mongoose = require('mongoose');

var Venue = mongoose.model('venue', {
	name: String,
	location: String,
	bands:[Band]
};

module.exports = {
	venue: Venue
}