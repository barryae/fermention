const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const authWare = require("../../middleware/authware")
// need to make authware work
router.route("/")
    .post(recipeController.create)
    .get(recipeController.findAll)

module.exports = router;