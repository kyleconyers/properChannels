const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/senators")
  .get(googleController.findAllSenators);

// router
// .route("/house")
// .get(googleController.findAllHouse);

module.exports = router;
