import asyncHandler from "../utils/asyncHanlder.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";

import { createUserService } from "../services/user.service.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email } = req.body;
  if (!username) {
    return res.status(500).json(new ApiError(500, "username missing"));
  }
  if (!email) {
    return res.status(500).json(new ApiError(500, "email missing"));
  }

  const user = await createUserService(username, email);
  return res
    .status(201)
    .json(new ApiResponse(201, "user created successfully", user));
});

export { createUser };
