const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.findAllUsers)
  .post(userController.createUser);

router.route("/:id")
  .get(userController.findUserById)
  .delete(userController.removeUser);

router.route("/:email")
  .get(userController.findUserByEmail)
  .put(userController.updateUser)

module.exports = router;
