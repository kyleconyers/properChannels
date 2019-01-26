const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('../passport')

// API endpoint to authenticate with Google 
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// Called when Google completes authentication
router.get('/google/callback',
	(req, res, next) => {
		// console.log(`req.user: ${req.user}`)
		console.log('======= /auth/google/callback was called! =====')
		next()
	},
	// Authenticate with passport
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		// Get passed user object
		const {user} = req
		console.log();
		console.log("GOOGLE AUTH:")
		console.log(JSON.stringify( user,null,4))
		console.log()
		res.redirect('/')
	}
)

// API endpoint to authorize with Google and connect Google profile to account
router.get('/connect/google', passport.authorize('googleConnect', { scope: ['profile'] }))

// Called when Google completes authentication
router.get('/connect/google/callback',
	(req, res, next) => {
		// console.log(`req.user: ${req.user}`)
		console.log('======= /auth/connect/google/callback was called! =====')
		next()
	},
	// authorize with passport
	passport.authorize('googleConnect', { failureRedirect: '/profile' }),
	(req, res) => {
		// Get passed user object
		const {user} = req
		console.log();
		console.log("GOOGLE AUTH:")
		console.log(JSON.stringify( user,null,4))
		console.log()
		res.redirect('/profile')
	}
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { username, password, address } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			console.log(`Sorry, already a user with the username: ${username}`)
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password,
			'address': address
		})
		newUser.save((err, savedUser) => {
			
			if (err) {
				console.log("Error saving new user:")
				console.log(err)
				return res.json({error: err})
			}
			console.log("ADDING USER:")
			console.log(savedUser)
			return res.json(savedUser)
		})
	})
})

// PUT route for updating user info
router.put('/updateprofile', (req, res) => {
	const {user} = req;
	const {address} = req.body;

	if (user) {
		console.log("SEARCHING USER")
		User.findOneAndUpdate({"_id": user._id},{address: address}, (err, userMatch) => {
			if (err) {
				console.log("Error saving new user:")
				console.log(err)
				return res.json({error: err})
			}
			if (userMatch) {
				console.log("USER MATCHED")
				res.json(userMatch)
			}
		})
	} else res.send("NO USER DATA")
})

module.exports = router
