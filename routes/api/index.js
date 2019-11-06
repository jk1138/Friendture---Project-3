const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
const trophyRoutes = require("./trophy");
const commentRoutes = require("./comment");


//routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/trophy", trophyRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;
