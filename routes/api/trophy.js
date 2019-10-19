const router = require("express").Router();
const trophyController = require("../../controllers/trophyController");

router.route("/")
  .get(trophyController.trophy.findAll)
  .post(trophyController.create);

router
  .route("/:id")
  .get(trophyController.findById)
  .put(trophyController.update)
  .delete(trophyController.remove);

module.exports = router;