import axios from "axios";

export default {
  signup: function(input) {
    return axios.post("/api/signup", input);
  },

  //probably need to send username or password with request?
  authenticate: function(input) {
    return axios.post("/api/authenticate", input);
  },

  createRecipe: function(recipe) {
    return axios.post("/api/recipes", recipe);
  },

<<<<<<< HEAD
  getAllRecipes: function() {
    return axios.get("/api/recipes");
  }
};
=======
    getUser: function () {
        return axios.get("/api/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    },

    createRecipe: function (recipe) {
        return axios.post("/api/recipes", recipe);
    },

    getAllRecipes: function () {
        return axios.get("/api/recipes");
    }
};
>>>>>>> 5a826aab6be8f6cacb829be893aa7c3a89c9113d
