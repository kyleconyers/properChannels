const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../db/models/user')

const strategy = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: '/auth/connect/google/callback',
		passReqToCallback: true
	},
	function(req, token, tokenSecret, profile, done) {
		// Extract params from passed objects
		const {account, user} = req
		const { id, name, photos } = profile
		
		// Logging for testing
		console.log()
		console.log('===== GOOGLE PROFILE =======')
		console.log(profile)
		console.log('======== END ===========')

        // return done(null, {type:"SUCCESS"})
		// Check if a user is already logged in
		if (user) {
			// If logged in user, attempt to link Google profile to existing account
			console.log("\nADDING GOOGLE PROFILE TO EXISTING USER")
			user.google.googleId = id
			user.firstName = name.givenName
			user.lastName = name.familyName
			user.photos = photos

			user.save(err => {
				if (err) throw err;
				
				return done(null, user);
			})
		} else {
            console.log("Cannot connect to non-existant user")
            return done(null, false);
        }
	}
)

module.exports = strategy
