module.exports = {
	index: function(req, res) {
		// res.render('index',{loggedIn: false});
		res.render('index', {loggedIn: !!req.user, user: req.user});
	}
}