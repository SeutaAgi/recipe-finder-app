const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [String],
    dietaryPreferences: [String],
    instructions: String,
    userContributed: Boolean
});

const Recipe = mongoose.model('Recipe', RecipeSchema); // Define the model once

module.exports = Recipe;
