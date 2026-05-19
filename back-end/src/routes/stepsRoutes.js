// src/routes/stepsRoutes.js
const express = require('express');
const router = express.Router();
const stepsController = require('../controller/stepsController');
// Add authentication middleware if needed

router.post('/', stepsController.createStep);
router.get('/', stepsController.getAllSteps);
router.get('/:id', stepsController.getStepById);
router.put('/:id', stepsController.updateStep);
router.delete('/:id', stepsController.deleteStep);

module.exports = router;
