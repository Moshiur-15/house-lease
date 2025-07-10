import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import bcrypt from "bcryptjs";
import user from "@/app/Models/user";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, image } = body;

    await connectDB();

    // Check if user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with hashed password
    const newUser = await user.create({
      name,
      email,
      image,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
      },
      newUser,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
