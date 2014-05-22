var venue = require('../models/venueModel.js');

var venueController = {
	get: function(req,res){

		venue.filterVenues(arr, function(err, results){ //Need to construct array from information passed via AJAX call
			if(err){

				res.send(500, 'Internal error finding DB results');
				// return;
			}

			console.log(results);
			res.send({results: results})
		})
	},
	post: function(req,res){
		// save button determines associated venue
		// save reference to venue in a user's favorites array
	}
};

module.exports = venueController;