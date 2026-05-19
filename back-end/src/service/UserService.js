const User = require("../model/User");

async function register(firstName, lastName, age, email, password) {
  const newUser = {
    name: { firstName, lastName },
    age,
    email,
    password,
  };
  await User.insertOne(newUser);
}
async function login(email, password) {
    const user = await User.findOne({ email });
    if(!user) {
        throw new Error("user with email not found");
    }
    const result = await user.validatePassword(password);
    if(!result) {
        throw new Error("password is wrong");
    }
}

module.exports = { login, register };
// Additional CRUD operations
async function getAllUsers() {
  return await User.find();
}

async function getUserById(id) {
  return await User.findById(id);
}

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  login,
  register,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};