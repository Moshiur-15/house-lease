import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import user from "../Models/user";

// register
export const register = async (req) => {
  const { name, email, password, image } = await req.json();
  try {
    let existingUser = await user.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }
    // password
    const pass = await bcrypt.hash(password, 6);
    const newUser = await user.create({
      name,
      email,
      password: pass,
      role:"buyer",
      image
    });
    console.log("newUser",newUser)
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
  const { email, password } = await req.json();
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
