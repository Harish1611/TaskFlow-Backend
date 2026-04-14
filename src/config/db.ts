import mongoose from "mongoose";
import { logger } from "./logger";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });

    logger.info("MongoDB Connected");
  } catch (error: any) {
    logger.error(`DB Connection Failed: ${error.message}`);
    throw error; // important: fail fast
  }
};

// optional logs only (no retry logic)
mongoose.connection.on("connected", () => {
  logger.info("Mongoose connected");
});

mongoose.connection.on("error", (err) => {
  logger.error(`Mongoose error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  logger.warn("Mongoose disconnected");
});