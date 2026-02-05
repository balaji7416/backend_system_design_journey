import User from "../models/user.model.js";

const createUserService = async (username, email) => {
  const Existing = await User.findOne({ email });
  if (Existing) {
    throw new Error("user already exists");
  }
  const user = await User.create({ username, email });
  return user;
};

export { createUserService };
