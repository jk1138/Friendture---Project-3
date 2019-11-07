const router = require("express").Router();
const trophyController = require("../../controllers/trophyController");
const userController = require("../../controllers/userController");

router
  .route("/:email")
  .put(userController.updateUserT);

module.exports = router;