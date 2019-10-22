const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
const trophyRoutes = require("./trophy");

//routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/trophy", trophyRoutes);

module.exports = router;
