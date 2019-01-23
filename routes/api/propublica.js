const router = require("express").Router();
const propublicaController = require("../../controllers/propublicaController");

// Matches with "/api/google"
router
  .route("/senators")
  .get(propublicaController.findAllSenators);

router
.route("/house")
.get(propublicaController.findAllHouse);

router
  .route("/senatecommittees")
  .get(propublicaController.findAllSenateCommittees);

  router
  .route("/housecommittees")
  .get(propublicaController.findAllHouseCommittees);

module.exports = router;
