import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;

if (!host || !port || !database) {
  throw new Error("❌ Missing required environment variables for MongoDB.");
}

const uri = `mongodb://${host}:${port}/${database}?authSource=admin`;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

connectDB(); // Ensure DB connects before handling requests

export { mongoose };
