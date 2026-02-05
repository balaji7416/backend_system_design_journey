import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI);
    console.log("** MongoDB connected **");
  } catch (err) {
    console.log(`Failed to connect MongoDB: `, err.message);
  }
};

export default connectDB;
