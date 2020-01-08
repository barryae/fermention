const router = require("express").Router();
const authController = require("../../controllers/authController");
const authWare = require("../../middleware/authware")

router.route("/")
    .post(authController.check)
module.exports = router;
