import Task from "../models/task.model.js";

const createTaskService = (taskName) => {
  const task = Task.create({ taskName });
  return task;
};

export { createTaskService };
