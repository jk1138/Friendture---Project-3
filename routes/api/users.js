const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.findAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.findUserById)
  .put(userController.updateUser)
  .delete(userController.removeUser);

module.exports = router;
