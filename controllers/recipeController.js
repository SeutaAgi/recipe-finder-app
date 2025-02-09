// controllers/recipeController.js

const Recipe = require('../models/Recipe');

exports.getAllIngredients = async (req, res) => {
    try {
        // Assuming you have a database model for ingredients
        const ingredients = await Recipe.find(); // Replace with actual model
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching ingredients", error });
    }
};


// Fetch recipes by ingredients or dietary preferences
exports.getRecipes = async (req, res) => {
    try {
        const { ingredients, dietaryPreferences } = req.query;
        let query = {};

        if (ingredients) query.ingredients = { $all: ingredients.split(',') };
        if (dietaryPreferences) query.dietaryPreferences = { $in: dietaryPreferences.split(',') };

        const recipes = await Recipe.find(query);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Add a new recipe
exports.addRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ error: 'Error adding recipe', details: error.message });
    }
};
