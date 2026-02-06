import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";

const getAllUsersService = async () => {
  const users = await User.find();
  if (!users) {
    throw new ApiError(404, "No users found");
  }
  return users;
};

const getUserByIdService = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  return user;
};
export { getAllUsersService, getUserByIdService };
