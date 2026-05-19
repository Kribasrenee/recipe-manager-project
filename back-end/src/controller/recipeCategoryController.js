// src/controller/recipeCategoryController.js
const RecipeCategoryService = require('../service/RecipeCategoryService');
const ResponseUtil = require('../utils/ResponseUtil');

exports.createCategory = async (req, res) => {
  try {
    const category = await RecipeCategoryService.createCategory(req.body);
    ResponseUtil.success(res, category, 'Category created successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await RecipeCategoryService.getAllCategories();
    ResponseUtil.success(res, categories);
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await RecipeCategoryService.getCategoryById(req.params.id);
    if (!category) return ResponseUtil.notFound(res, 'Category not found');
    ResponseUtil.success(res, category);
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await RecipeCategoryService.updateCategory(req.params.id, req.body);
    if (!category) return ResponseUtil.notFound(res, 'Category not found');
    ResponseUtil.success(res, category, 'Category updated successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await RecipeCategoryService.deleteCategory(req.params.id);
    if (!category) return ResponseUtil.notFound(res, 'Category not found');
    ResponseUtil.success(res, category, 'Category deleted successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};
