var mongoose = require('mongoose');

var Band = mongoose.model('band', {
	name: String,
	genre: String
});

module.exports = Band;