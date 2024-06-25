import dotenv from "dotenv";
import express from "express";
import { DBConnection } from "./Config/DB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
DBConnection();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
