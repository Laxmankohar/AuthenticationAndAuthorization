import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const DBConnection = async () =>{
    try {
      await mongoose.connect(process.env.DBlink);
      const { mongoose } = mongoose;
      connection.once("open", () => {
        console.log("Database connected");
      });
    } catch (error) {
      console.log("Error in DB Connection", error);
    }
} 