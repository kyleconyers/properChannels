const router = require("express").Router();
const propublicaController = require("../../controllers/propublicaController");

// Matches with "/api/google"
router
  .route("/senators")
  .get(propublicaController.findAll);

module.exports = router;
