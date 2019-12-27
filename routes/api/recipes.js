const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/")
    .post(recipeController.create)
    .get(recipeController.findAll)

module.exports = router;