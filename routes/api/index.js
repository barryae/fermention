const router = require("express").Router();
const authRoutes = require("./auth");
const recipeRoutes = require("./recipes");
const signupRoutes = require("./signup")

// Book routes
router.use("/signup", signupRoutes)
router.use("/authenticate", authRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;