import axios from "axios";

export default {
    signup: function (input) {
        return axios.post("/api/signup", input);
    },

    //probably need to send username or password with request?
    authenticate: function (input) {
        return axios.post("/api/authenticate", input);
    },

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

    deleteRecipe: function (recipe) {
        return axios.delete("/api/recipes", recipe)
    },

    getUserRecipes: function (user) {
        return axios.get("/api/recipes/user", user)
    },

    getAllRecipes: function () {
        return axios.get("/api/recipes");
    }
};
