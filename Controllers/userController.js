import User from "../Models/userModel";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  const { name, email, password, role } = req.body;

  // validation for all the inputs
  if (!name || !email || !password || !role) {
    res.status(422).json({ message: "All fields should be filled" });
  }

  try {
    let existingUser;
    try {
      // checking whether user already sign up or not based on email
      existingUser = await User.findOne({ email: email });
    } catch (error) {
      console.log(err);
    }

    if (existingUser) {
      if (existingUser.email == email) {
        res
          .status(422)
          .json({ message: "User already exists with this email" });
      }
    }

    const salt = await bcrypt.genSalt(6);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creatting new user

    const user = new user({
      name,
      email,
      password: hashedPassword,
      role: role,
    });

    await user.save();
    return res
      .status(201)
      .json({ message: "Account is created successfully", User: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export  {signUp};