const router = require("express").Router();
const authController = require("../../controllers/authController");
const authWare = require("../../middleware/authware")

router.route("/")
    .post(authController.check)
// we need to use authWare here?
// .get(authController.userGet)
module.exports = router;
