import dotenv from "dotenv";
import express from "express";
import { DBConnection } from "./Config/DB.js";
import { router } from "./Routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

DBConnection();

app.get("/", (req, res) => {
  res.status(200).send("This is index page.")
})

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
