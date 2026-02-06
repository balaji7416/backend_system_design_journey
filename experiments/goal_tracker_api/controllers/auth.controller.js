import asyncHanlder from "../utils/asyncHanlder.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { registerService, loginService } from "../services/auth.service.js";

const validateInput = ({ username, email, password }) => {
  if (!username) {
    throw new ApiError(400, "username missing");
  }
  if (!email) {
    throw new ApiError(400, "email missing");
  }
  if (!password) {
    throw new ApiError(400, "password missing");
  }
};

const register = asyncHanlder(async (req, res) => {
  const { username, email, password } = req.body;
  validateInput({ username, email, password });
  const { user, token } = await registerService(username, email, password);

  return res
    .status(201)
    .json(new ApiResponse(201, "user registration success", { user, token }));
});

const login = asyncHanlder(async (req, res) => {
  const { username, email, password } = req.body;
  validateInput({ username, email, password });
  const { user, token } = await loginService(username, email, password);

  return res
    .status(200)
    .json(new ApiResponse(200, "user login success", { user, token }));
});

export { register, login };
