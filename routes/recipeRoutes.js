const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * @swagger
 * /api/recipes:
 *   get:
 *     summary: Get recipes based on ingredients or dietary preferences
 *     description: Fetch recipes by providing ingredients or dietary preferences as query parameters.
 *     parameters:
 *       - in: query
 *         name: ingredients
 *         schema:
 *           type: string
 *         description: Comma-separated list of ingredients
 *       - in: query
 *         name: dietaryPreferences
 *         schema:
 *           type: string
 *         description: Comma-separated list of dietary preferences
 *     responses:
 *       200:
 *         description: Successfully retrieved recipes
 *       500:
 *         description: Internal server error
 */
router.get('/recipes', recipeController.getRecipes);

/**
 * @swagger
 * /api/recipes:
 *   post:
 *     summary: Add a new recipe
 *     description: Add a new recipe to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               dietaryPreferences:
 *                 type: array
 *                 items:
 *                   type: string
 *               instructions:
 *                 type: string
 *               userContributed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Recipe added successfully
 *       500:
 *         description: Error adding recipe
 */
router.post('/recipes', recipeController.addRecipe);

/**
 * @swagger
 * /api/ingredients:
 *   get:
 *     summary: Get all available ingredients
 *     description: Retrieve a list of all ingredients available in the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved ingredients
 *       500:
 *         description: Internal server error
 */
router.get('/ingredients', recipeController.getAllIngredients);

module.exports = router;
