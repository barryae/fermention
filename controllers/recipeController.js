const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Recipe.create(req.body)
      .then(dbRecipe => {
        console.log(dbRecipe);
        db.User.findOneAndUpdate(
          { username: dbRecipe.user },
          { $push: { recipes: dbRecipe._id } },
          { new: true },
          result => {}
        );
      })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },
  delete: function(req, res) {
    console.log("req.params.id", req.params.id);
    db.Recipe.deleteOne({ _id: req.params.id })
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },

  findUserRecipes: function(req, res) {
    console.log("req.params", req.params);
    db.User.findById(req.params.id)
      .populate("recipes")
      .then(user => {
        console.log(user);
        res.json(user);
      })
      .catch(err => {
        res.json({ message: err });
      });
  },

  findAll: function(req, res) {
    console.log("findAll");
    db.Recipe.find(req.query)
      .sort({ brewStart: -1 })
      .then(dbRecipes => {
        res.json(dbRecipes);
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
};
