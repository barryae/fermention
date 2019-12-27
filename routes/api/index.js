const router = require("express").Router();
const authRoutes = require("./auth");
const recipeRoutes = require("./recipes");

// Book routes
router.use("/signup", authRoutes)
router.use("/authenticate", authRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;