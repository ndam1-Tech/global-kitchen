const recipeService = require('../services/recipeService');

const getAllRecipes = async (req, res) => {
  try {
    const { category } = req.query;
    const recipes = await recipeService.getAllRecipes(category);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.updateRecipe(req.params.id, req.body);
    res.json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await recipeService.deleteRecipe(req.params.id);
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getAllRecipes, createRecipe, updateRecipe, deleteRecipe };