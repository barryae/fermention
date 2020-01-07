const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router
  .route("/")
  .post(recipeController.create)
  .get(recipeController.findAll);

router
  .route("/:id")
  .get(recipeController.findUserRecipes)
  .delete(recipeController.delete);

module.exports = router;
