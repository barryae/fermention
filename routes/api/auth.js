const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/")
    .post(authController.check)
    .get(authController.userGet)
module.exports = router;
