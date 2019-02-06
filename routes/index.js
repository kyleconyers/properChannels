const path = require("path");
const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	console.log('YOU ARE IN THE PRODUCTION ENV')
	router.use('/static', express.static(path.join(__dirname, '../client/build/static')))
	router.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/build/index.html'))
	})
} else {
  // Development environment
  router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
}
module.exports = router;
