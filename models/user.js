var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Venue = require('./venueModel');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favVenues: {
  	type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venue'
    }],
  	required: false
  }
});

userSchema.pre('save', function(next){

  // First, check to see if the password has been modified. If not, just move on.
  if(!this.isModified('password')) return next();

  // Store access to "this", which represents the current user document
  var user = this;

  // Generate an encryption "salt." This is a special way of increasing the
  // encryption power by wrapping the given string in a secret string. Something
  // like "secretpasswordsecret" and then encrypting that result.
  bcrypt.genSalt(10, function(err, salt){

    // If there was an error, allow execution to move to the next middleware
    if(err) return next(err);

    // If we are successful, use the salt to run the encryption on the given password
    bcrypt.hash(user.password, salt, function(err, hash){

      // If there was an error, allow execution to move to the next middleware
      if(err) return next(err);

      // If the encryption succeeded, then replace the un-encrypted password
      // in the given document with the newly encrypted one.
      user.password = hash;

      // Allow execution to move to the next middleware
      return next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, next){
  // Use bcrypt to compare the unencrypted value to the encrypted one in the DB
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    // If there was an error, allow execution to move to the next middleware
    if(err) return next(err);

    // If there is no error, move to the next middleware and inform
    // it of the match status (true or false)
    return next(null, isMatch);
  });
};

// Finds and updates the given user by adding in the venue objectId
// to the user's favorite venues array
userSchema.methods.addFavoriteVenue = function(venueID, userID, cb) {
  User.update( { "_id" : userID }, { $push: {"favVenues" : venueID}}, cb);
}
// Our user model
var User = mongoose.model('user', userSchema);

// Make user model available through exports/require
module.exports = User;














