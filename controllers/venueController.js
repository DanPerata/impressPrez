var Venue = require('../models/venueModel.js');

var venueController = {
	get: function(req,res){
		console.log('get venue');
		venueId = req.query.venueId;
		console.log(venueId);
		Venue.findById(venueId)
      .populate('bands', null, 'band')
			.exec(function(err, venue) {
				if (err) {
					console.log(err);
					res.send(500, 'could not find bands');
					return;
				}
				console.log('inside exec func. Venue:',venue);
				res.send(venue.bands);
			})
	},
	post: function(req,res){
		
	}
};

module.exports = venueController;