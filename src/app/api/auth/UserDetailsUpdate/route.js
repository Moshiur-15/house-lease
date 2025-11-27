import User from "@/app/Models/user";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function PUT(req) {
  await connectDB();
  try {
    const { email, name, location, professionalTitle } = await req.json();
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { name, location, professionalTitle }
    );
    if (!updatedUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { updatedUser, message: "User details updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update user details" },
      { status: 500 }
    );
  }
}
