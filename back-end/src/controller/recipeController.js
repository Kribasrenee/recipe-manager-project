// src/controller/recipeController.js
const RecipeService = require('../service/RecipeService');
const ResponseUtil = require('../utils/ResponseUtil');

exports.createRecipe = async (req, res) => {
  try {
    const recipe = await RecipeService.createRecipe(req.body);
    ResponseUtil.success(res, recipe, 'Recipe created successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeService.getAllRecipes();
    ResponseUtil.success(res, recipes);
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await RecipeService.getRecipeById(req.params.id);
    if (!recipe) return ResponseUtil.notFound(res, 'Recipe not found');
    ResponseUtil.success(res, recipe);
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await RecipeService.updateRecipe(req.params.id, req.body);
    if (!recipe) return ResponseUtil.notFound(res, 'Recipe not found');
    ResponseUtil.success(res, recipe, 'Recipe updated successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await RecipeService.deleteRecipe(req.params.id);
    if (!recipe) return ResponseUtil.notFound(res, 'Recipe not found');
    ResponseUtil.success(res, recipe, 'Recipe deleted successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};
