var mongoose = require('mongoose');

var Band = mongoose.model('band', {
	name: String,
	image: String
});

module.exports = Band;