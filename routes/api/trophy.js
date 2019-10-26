const router = require("express").Router();
const trophyController = require("../../controllers/trophyController");

router.route("/")
  .get(trophyController.findAllTrophies);

router
  .route("/:id")
  .put(trophyController.updateTrophy);

module.exports = router;