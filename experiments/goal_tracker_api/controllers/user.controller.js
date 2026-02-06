import asyncHandler from "../utils/asyncHanlder.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import {
  getAllUsersService,
  getUserByIdService,
} from "../services/user.service.js";

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await getAllUsersService();
  return res.status(200).json(new ApiResponse(200, "users found", users));
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "Id is required");
  }
  const user = await getUserByIdService(req.params.id);
  return res.status(200).json(new ApiResponse(200, "user found", user));
});
export { getAllUsers, getUserById };
