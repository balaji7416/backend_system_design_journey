import ApiError from "../utils/apiError.js";
import asyncHanlder from "../utils/asyncHanlder.js";
import { verifyToken } from "../services/auth.service.js";
import User from "../models/user.model.js";

const authMiddleWare = asyncHanlder(async (req, res, next) => {
  // access token from req
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    throw new ApiError(401, "Unauthorized");
  }

  //decode the token to get the payload -> {id: userId}
  const decoded = verifyToken(token);

  //find user in db
  const user = await User.findById(decoded.id);

  //attach user to req obj
  req.user = user;

  //pass controll to next middleware
  next();
});

export default authMiddleWare;
