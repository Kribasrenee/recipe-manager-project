// src/service/RecipeService.js
// Service for Recipe CRUD operations
const Recipe = require('../model/Recipe');

class RecipeService {
  static async createRecipe(data) {
    return await Recipe.create(data);
  }

  static async getAllRecipes() {
    return await Recipe.find();
  }

  static async getRecipeById(id) {
    return await Recipe.findById(id);
  }

  static async updateRecipe(id, data) {
    return await Recipe.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteRecipe(id) {
    return await Recipe.findByIdAndDelete(id);
  }
}

module.exports = RecipeService;
