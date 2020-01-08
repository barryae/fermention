const router = require("express").Router();
const authController = require("../../controllers/authController");
const authWare = require("../../middleware/authware")
// need to make authware work
router.route("/")
    .get(authWare, authController.userGet)
module.exports = router;