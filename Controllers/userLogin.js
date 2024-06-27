import createToken from "../Middlewares/middleware.js";
import User from "../Models/userModel.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
    const { email, password } = req.body;

    // checking whether email or password does exist
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    let loggedUser;

    try {
        loggedUser = await User.findOne({ email: email });

        if (!loggedUser) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        // checking password and comparing it with existing users password
        const isPassword = await bcrypt.compareSync(password, loggedUser.password)

        if (!isPassword) {
            return res.status(400).json({ message: "Invalid password, check it once" })
        }

        // creating token
        const token = createToken(loggedUser._id);


        // creating and setting cookie  with users id and token
        res.cookie(String(loggedUser._id), token, {
            httpOnly: true,
            path: "/",
            expires: new Date(Date.now() + 1000 * 59)
        })

        return res.status(200).json({ message: "Successfully logged in", User: loggedUser })

    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

export { login };