import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import express from "express";

//routers
import userRouter from "./routes/user.router.js";
import taskRouter from "./routes/task.router.js";
import authRouter from "./routes/auth.router.js";

//middlewares
import globalErrorMiddleware from "./middlewares/error.middleware.js";

//utils
import ApiError from "./utils/apiError.js";

// configure env variable access
dotenv.config();

//connect to MongoDB
await connectDB();

const app = express();
app.use(express.json());

//assign requests to router
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/auth", authRouter);

app.use((req, res, next) => {
  throw new ApiError(500, "route not found");
});

app.use(globalErrorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
