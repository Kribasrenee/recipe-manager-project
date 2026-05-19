const userService = require("../service/UserService");
const { successResponse, failureResponse } = require("../utils/ResponseUtil");

module.exports.register = async (req, res) => {
  try {
    const { firstName, lastName, age, email, password } = req.body;
    await userService.register(firstName, lastName, age, email, password);
    successResponse(res, "new user got created", null, 201);
  } catch (error) {
    failureResponse(res, error.message, 401);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userService.login(email, password);
    successResponse(res, "Login successful");
  } catch (error) {
    failureResponse(res, error.message, 401);
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    successResponse(res, "Users fetched", users);
  } catch (error) {
    failureResponse(res, error.message);
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return failureResponse(res, "User not found", 404);
    successResponse(res, "User fetched", user);
  } catch (error) {
    failureResponse(res, error.message);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) return failureResponse(res, "User not found", 404);
    successResponse(res, "User updated", user);
  } catch (error) {
    failureResponse(res, error.message);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return failureResponse(res, "User not found", 404);
    successResponse(res, "User deleted", user);
  } catch (error) {
    failureResponse(res, error.message);
  }
};