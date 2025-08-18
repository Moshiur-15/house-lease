import User from "@/app/Models/user";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const allUsers = await User.aggregate([
    {
      $project: {
        _id: 0,
        role: 1,
      },
    },
  ]);
  const totalUser = allUsers.length;
  const userInfo = { totalUser, allUsers };
  return NextResponse.json({ message: "Get users", userInfo });
}
