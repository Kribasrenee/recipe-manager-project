// src/controller/stepsController.js
const StepsService = require('../service/StepsService');
const ResponseUtil = require('../utils/ResponseUtil');

exports.createStep = async (req, res) => {
  try {
    const step = await StepsService.createStep(req.body);
    ResponseUtil.success(res, step, 'Step created successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.getAllSteps = async (req, res) => {
  try {
    const steps = await StepsService.getAllSteps();
    ResponseUtil.success(res, steps);
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.getStepById = async (req, res) => {
  try {
    const step = await StepsService.getStepById(req.params.id);
    if (!step) return ResponseUtil.notFound(res, 'Step not found');
    ResponseUtil.success(res, step);
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.updateStep = async (req, res) => {
  try {
    const step = await StepsService.updateStep(req.params.id, req.body);
    if (!step) return ResponseUtil.notFound(res, 'Step not found');
    ResponseUtil.success(res, step, 'Step updated successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};

exports.deleteStep = async (req, res) => {
  try {
    const step = await StepsService.deleteStep(req.params.id);
    if (!step) return ResponseUtil.notFound(res, 'Step not found');
    ResponseUtil.success(res, step, 'Step deleted successfully');
  } catch (err) {
    ResponseUtil.error(res, err.message);
  }
};
