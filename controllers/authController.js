const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.User.create(req.body)
            .then(function (result) {
                res.json({ message: result.username + " Created" });
            })
            .catch(function (err) {
                res.status(500).json({ error: err.message });
            });
    },
    check: function (req, res) {
        const { username, password } = req.body;
        db.User.findOne({ username: username }).then(function (dbUser) {
            if (!dbUser)
                return res
                    .status(401)
                    .json({ message: "Username or Password is incorrect." });
            if (dbUser.comparePassword(password)) {
                const token = jwt.sign(
                    {
                        data: dbUser._id
                    },
                    process.env.KEY
                );

                res.json({
                    id: dbUser._id,
                    username: dbUser.username,
                    token: token
                })
            } else {
                res.status(401).json({ message: "Username or password is incorrect." });
            }
        })
    },
    userGet: function (req, res) {
        // this needs to be used in order to make our user state persist
        const { password, __v, ...user } = req.user.toObject();
        res.json(user);
    }
}
