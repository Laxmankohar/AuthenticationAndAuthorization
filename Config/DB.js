import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const DBConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Database connected successfully");
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error in DB Connection", error);
  }
} 