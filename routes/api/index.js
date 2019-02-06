const path = require("path");
const router = require("express").Router();
const propublicaRoutes = require("./propublica");
const googleRoutes = require("./google");
const messageRoutes = require("./message");
const forumRoutes = require("./forum");


// Messages Routes
router.use("/message", messageRoutes);


// Forum Routes
router.use("/forum", forumRoutes);


// Propublica Routes
router.use("/propublica", propublicaRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
