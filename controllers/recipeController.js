const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Recipe.create(req.body)
            .then(dbRecipe => {
                return db.User.findOneAndUpdate(
                    { username: dbRecipe.user },
                    { $push: { recipes: dbRecipe._id } },
                    { new: true }
                );
            })
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },
    delete: function (req, res) {
        db.Recipe.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.status(422).json(err);
            });
    },

    findUserRecipes: function (req, res) {
        db.User.findById(req.params.id)
            .populate("recipes")
            .then(dbUser => {
                const { password, ...user } = dbUser.toObject();
                res.json(user);
            })
            .catch(err => {
                res.json({ message: err });
            });
    },

    findAll: function (req, res) {
        db.Recipe.find(req.query)
            .sort({ startTime: -1 })
            .then(dbRecipes => {
                res.json(dbRecipes);
            })
            .catch(err => {
                res.json({ message: err });
            });
    }
};
