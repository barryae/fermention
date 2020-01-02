const db = require("../models")

module.exports = {
    create: function (req, res) {
        db.Recipe
            .create(req.body)
            .then(dbRecipe => {
                db.User.findOneAndUpdate(dbRecipe.user, { $push: { recipes: dbRecipe._id } }, { new: true })
            })
            .then(dbUser => {
                res.json(dbUser)
            })
            .catch(err => {
                res.status(422).json(err)
            })
    },
    findAll: function (req, res) {
        db.Recipe
            .find(req.query)
            .sort({ brewStart: -1 })
            .then(dbRecipes => {
                res.json(dbRecipes)
            })
            .catch(err => {
                res.json({ message: err })
            })
    }
}