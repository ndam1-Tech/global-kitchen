const express = require('express');
const router = express.Router();
const { getAllRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

router.get('/', getAllRecipes);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;