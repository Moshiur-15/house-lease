import Booking from "@/app/Models/Booking";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  const { searchParams } =  new URL(req.url);
  const userEmail = searchParams.get("email");
  try {
    const length = await Booking.aggregate([
      { $match: { email: userEmail } },
      { $count: "booked_data" },
    ]);
    const bookedCount = length[0]?.booked_data || 0;
    return NextResponse.json({ message: "Property data length", bookedCount });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed Booked data", error: error.message },
      { status: 500 }
    );
  }
}