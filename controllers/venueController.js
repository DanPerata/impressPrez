var venue = require('../models/venueModel.js');

var venueController = {
	get: function(req,res){
		// db call for venue items.
		// will take in data from ajax request to implant into db search criteria
	},
	post: function(req,res){
		// save button determines associated venue
		// save reference to venue in a user's favorites array
	}
};

module.exports = venueController;