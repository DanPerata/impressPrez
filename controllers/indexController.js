var venue = require('../models/venueModel.js');
var User = require('../models/user.js');

module.exports = {
	index: function(req, res) {
		venue.find({}, function(err, venueArray) {
			if(err) {
				res.send(500, 'Error finding venues');
			}
			// res.render('index', {loggedIn: !!req.user, user: req.user, venueArray: venueArray});
			if(!!req.user) {
				User.findById(req.user._id)
					.populate('favVenues', null, 'venue')
					.exec(function(err, user) {
						if (err) {
							console.log(err);
							res.send(500, 'error');
							return;
						}
						res.render('index', {loggedIn: !!req.user, user: user, venueArray: venueArray});
					})
			}
			else {
				res.render('index', {loggedIn: !!req.user, user: req.user, venueArray: venueArray});
			}

		})

	},

	favorites: function(req, res) {
		User.findById(req.user._id)
 	   	.populate('favVenues', null, 'venue')
			.exec(function(err, user) {
				if (err) {
					console.log(err);
					res.send(500, 'error');
					return;
				}
			})
	}
}