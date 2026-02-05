import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHanlder.js";

import { createTaskService } from "../services/task.service.js";

const createTask = asyncHandler(async (req, res) => {
  const { taskName } = req.body;
  if (!taskName) {
    throw new ApiError("task name not found");
  }

  const task = await createTaskService(taskName);
  return res
    .status(201)
    .json(new ApiResponse(200, "task created successfully", task));
});

export { createTask };
