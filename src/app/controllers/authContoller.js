import { NextResponse } from "next/server";
import user from "../Models/user";
import bcrypt from "bcryptjs";

// register
export const register = async (req) => {
  const { name, email, password } = req.json();
  try {
    let existingUser = await user.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    }
    // password
    const pass = await bcrypt.hash(password, 6);
    const newUser = await user.create({
      name,
      email,
      password: pass,
    });
    return NextResponse.json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
};

// login
export const login = async (req) => {
  const { email, password } = req.json();
  try {
    // email match
    let existingUser = await user.findOne({ email });
    if (!existingUser) return NextResponse.json({ message: "Email not found" });
    // password match
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch)
      return NextResponse.json({ message: "Password is incorrect" });

    return NextResponse.json({
      message: "Logged in successfully",
      success: true,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong",
      success: false,
    });
  }
};
