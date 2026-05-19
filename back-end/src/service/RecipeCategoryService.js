// src/service/RecipeCategoryService.js
// Service for RecipeCategory CRUD operations
const RecipeCategory = require('../model/RecipeCategory');

class RecipeCategoryService {
  static async createCategory(data) {
    return await RecipeCategory.create(data);
  }

  static async getAllCategories() {
    return await RecipeCategory.find();
  }

  static async getCategoryById(id) {
    return await RecipeCategory.findById(id);
  }

  static async updateCategory(id, data) {
    return await RecipeCategory.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteCategory(id) {
    return await RecipeCategory.findByIdAndDelete(id);
  }
}

module.exports = RecipeCategoryService;
