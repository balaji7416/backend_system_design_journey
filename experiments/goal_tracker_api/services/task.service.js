import Task from "../models/task.model.js";

const createTaskService = async (taskName, owner) => {
  const task = await Task.create({ taskName, owner });
  return task;
};

const getAllTasksService = async () => {
  const tasks = await Task.find();
  return tasks;
};

export { createTaskService, getAllTasksService };
