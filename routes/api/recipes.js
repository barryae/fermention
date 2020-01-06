const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/")
    .post(recipeController.create)
    .get(recipeController.findAll)
    .delete(recipeController.delete)

router.route("/user")
    .get(recipeController.findUserRecipes)

module.exports = router;