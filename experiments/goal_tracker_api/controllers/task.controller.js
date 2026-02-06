import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHanlder.js";

import {
  createTaskService,
  getAllTasksService,
} from "../services/task.service.js";

const createTask = asyncHandler(async (req, res) => {
  if (!req?.body?.taskName) {
    throw new ApiError(400, "task name not found");
  }
  const { taskName } = req?.body;
  const task = await createTaskService(taskName, req.user._id);
  return res
    .status(201)
    .json(new ApiResponse(200, "task created successfully", task));
});

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await getAllTasksService();
  return res
    .status(200)
    .json(new ApiResponse(200, "tasks fetching success", tasks));
});

export { createTask, getAllTasks };
