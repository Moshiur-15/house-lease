import user from "@/app/Models/user";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const loggedInUserEmail = searchParams.get("email");
    const users = await user.find({ email: { $ne: loggedInUserEmail } });

    return NextResponse.json({ users, success: true });
  } catch (err) {
    return NextResponse.json({
      message: "Error fetching users",
      success: false,
      error: err.message,
    });
  }
}