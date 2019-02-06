const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../db/models/user')

const strategy = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: '/auth/google/callback',
		passReqToCallback: true
	},
	function(req, token, tokenSecret, profile, done) {
		// Extract params from passed objects
		const {user} = req
		const { id, name, photos } = profile
		
		// Logging for testing
		console.log()
		console.log("=====USER=====")
		console.log(user)
		console.log()
		console.log('===== GOOGLE PROFILE =======')
		console.log(profile)
		console.log('======== END ===========')

		// Check if a user is already logged in
		if (!req.user) {
			// If not, search to see if user matching Google ID from profile exists in database
			User.findOne({ 'google.googleId': id }, (err, userMatch) => {
				// handle errors here:
				if (err) {
					console.log('Error!! trying to find user with googleId')
					console.log(err)
					return done(null, false)
				}
				// if there is already someone with that googleId
				if (userMatch) {
					return done(null, userMatch)
				} else {
					// If no user in DB, reject authentication
					// User must first connect Google profile to their account
					return done(null, false)

					// // if no user in our db, create a new user with that googleId
					// console.log('====== PRE SAVE =======')
					// console.log(id)
					// console.log(profile)
					// console.log('====== post save ....')
					// const newGoogleUser = new User({
					// 	'google.googleId': id,
					// 	firstName: name.givenName,
					// 	lastName: name.familyName,
					// 	photos: photos,
					// 	address: "DEFAULT ADDRESS"
					// })
					// // save this user
					// newGoogleUser.save((err, savedUser) => {
					// 	if (err) {
					// 		console.log('Error!! saving the new google user')
					// 		console.log(err)
					// 		return done(null, false)
					// 	} else {
					// 		return done(null, savedUser)
					// 	}
					// }) // closes newGoogleUser.save
				}
			}) // closes User.findONe
		} else {
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
		}
	}
)

module.exports = strategy
