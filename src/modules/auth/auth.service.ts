import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../user/user.model";

// REGISTER SERVICE
export const registerUser = async (email: string, password: string) => {
  // check existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  return user;
};

// LOGIN SERVICE
export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // generate token
  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );

  return {
    token,
    user,
  };
};