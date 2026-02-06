import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/task.controller.js";
import authMiddleWare from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleWare, createTask);
router.get("/", getAllTasks);

export default router;
