const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/")
  .get(postController.findAllPosts)
  .post(postController.createPost);

router
  .route("/:id")
  .get(postController.findPostById)
  .put(postController.updatePost)
  .delete(postController.removePost);

module.exports = router;