// src/routes/recipeCategoryRoutes.js
const express = require('express');
const router = express.Router();
const recipeCategoryController = require('../controller/recipeCategoryController');
// Add authentication middleware if needed

router.post('/', recipeCategoryController.createCategory);
router.get('/', recipeCategoryController.getAllCategories);
router.get('/:id', recipeCategoryController.getCategoryById);
router.put('/:id', recipeCategoryController.updateCategory);
router.delete('/:id', recipeCategoryController.deleteCategory);

module.exports = router;
