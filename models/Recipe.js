const mongoose = require('mongoose')


// Look into which data types to put in startTime,
// endTime, brewLength
// Look into AWS S3 buckets for picture submit
const RecipeSchema = new mongoose.Schema({
    title: String,
    category: String,
    ingredients: [{
        ingredient: String,
        ammount: Number,
        units: String
    }],
    description: String,
    startTime: Date,
    endTime: Date,
    brewLength: String,
    picture: String
})

module.exports = mongoose.model("Recipe", RecipeSchema)