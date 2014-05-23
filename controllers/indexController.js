var venue = require('../models/venueModel.js');
var User = require('../models/user.js');

module.exports = {
	index: function(req, res) {
		if(!!req.user) {
			User.findById(req.user._id)
	 	   	.populate('favVenues', null, 'venue')
				.exec(function(err, user) {
					if (err) {
						console.log(err);
						res.send(500, 'error');
						return;
					}
					console.log(user.favVenues);
					res.render('index', {loggedIn: !!req.user, user: user});
				})
		}
		else {
			venue.find({}, function(err, venueArray) {
				// console.log(req.user);
				if(err) {
					res.send(500, 'Error finding venues');
				}
				res.render('index', {loggedIn: !!req.user, user: req.user, venueArray: venueArray});
			})
		}
	}
}