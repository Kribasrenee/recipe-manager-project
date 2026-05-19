// src/service/StepsService.js
// Service for Steps CRUD operations
const Steps = require('../model/Steps');

class StepsService {
  static async createStep(data) {
    return await Steps.create(data);
  }

  static async getAllSteps() {
    return await Steps.find();
  }

  static async getStepById(id) {
    return await Steps.findById(id);
  }

  static async updateStep(id, data) {
    return await Steps.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteStep(id) {
    return await Steps.findByIdAndDelete(id);
  }
}

module.exports = StepsService;
