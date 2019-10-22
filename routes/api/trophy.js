const router = require("express").Router();
const trophyController = require("../../controllers/trophyController");

router.route("/")
  .get(trophyController.trophy.findAllTrophies);

router
  .route("/:id")
  .put(trophyController.updateTrohpy);

module.exports = router;