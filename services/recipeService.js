const Recipe = require('../models/Recipe');

const getAllRecipes = async (category) => {
  if (category) {
    return await Recipe.find({ category });
  }
  return await Recipe.find();
};

const createRecipe = async (data) => {
  if (!data.cookingTime || data.cookingTime < 1) {
    throw new Error('Cooking time must be a positive number');
  }
  const recipe = new Recipe(data);
  return await recipe.save();
};

const updateRecipe = async (id, data) => {
  const recipe = await Recipe.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!recipe) {
    throw new Error('Recipe not found');
  }
  return recipe;
};

const deleteRecipe = async (id) => {
  const recipe = await Recipe.findByIdAndDelete(id);
  if (!recipe) {
    throw new Error('Recipe not found');
  }
  return recipe;
};

module.exports = { getAllRecipes, createRecipe, updateRecipe, deleteRecipe };