import express from 'express'
import { signUp } from "../Controllers/userSignup.js";
import { login } from "../Controllers/userLogin.js";

const router = express.Router();


router.post("/signUp", signUp);
router.post("/login", login);

export default router;