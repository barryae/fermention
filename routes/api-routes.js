const db = require('../models')
const jwt = require("jsonwebtoken")
const authware = require("../middleware/authware")

module.exports = function (app) {
    app.post("/api/signup", function (req, res) {
        db.User.create(req.body).then(function (result) {
            res.json({ message: "User Created" })
        }).catch(function (err) {
            res.status(500).json({ error: err.message })
        })
    })

    app.post("/api/authenticate", function (req, res) {
        const { username, password } = req.body
        db.User.findOne({ username: username }).then(function (dbUser) {
            if (!dbUser) return res.status(401).json({ message: "Username or Password is incorrect." })
            if (dbUser.comparePassword(password)) {
                const token = jwt.sign({
                    data: dbUser._id
                }, process.env.KEY)

                res.json({
                    id: dbUser._id,
                    username: dbUser.username,
                    token: token
                })
            } else {
                res.status(401).json({ message: "Username or password is incorrect." });
            }
        })
    });

    app.post("/api/protected", authware, function (req, res) {
        const user = req.user;
        res.json({ message: user.username + "is authenticated." })
    })

    app.get("/api/public", function (req, res) {
        res.json({ message: "Public Data" })
    })

    app.post("/api/submit", function (req, res) {
        db.Recipe.create(req.body)
            .then(function (dbRecipe) {
                return db.User.findOneAndUpdate({}, { $push: { recipes: dbRecipe._id } }, { new: true })
            })
            .then(function (dbUser) {
                res.json(dbUser)
            })
            .catch(function (err) {
                res.json(err)
            })
    })

    app.get("/populateduser", function (req, res) {
        db.User.find({})
            .populate("recipes")
            .then(function (dbUser) {
                res.json(dbUser)
            })
            .catch(function (err) {
                res.json(err)
            })
    })
}