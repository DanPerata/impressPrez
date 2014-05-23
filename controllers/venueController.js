var Venue = require('../models/venueModel.js');
var User = require('../models/user.js');

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
		venueId = req.body.venueId;
		userId = req.user._id;
		console.log('venueId is ' + venueId + '. userId is ' + userId);
		User.findById(req.user._id, function(err, currUser) {
			currUser.addFavoriteVenue(venueId, userId, function(){
				console.log('redirecting');
			})
		})
	}
};

module.exports = venueController;