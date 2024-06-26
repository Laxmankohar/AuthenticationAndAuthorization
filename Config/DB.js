import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const DBConnection = async () =>{
    try {
      const connectionInstance = await mongoose.connect(process.env.DBlink);
      console.log("MongoDB Database connected successfully");
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
      // const { connection } = mongoose;
      // connection.once("open", () => {
      //   console.log("MongoDB Database connected successfully");
      // });
    } catch (error) {
      console.log("Error in DB Connection", error);
    }
} 