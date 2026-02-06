import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
  return token;
};

const registerService = async (username, email, password) => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new ApiError(409, "user already existing");
  }
  const user = await User.create({ username, email, password });
  const token = generateToken({ id: user._id });
  return { token, user };
};

const loginService = async (username, email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(404, "user not found");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "password incorrect");
  }
  const token = generateToken({ id: user._id });
  return { token, user };
};

export { verifyToken, generateToken, registerService, loginService };
