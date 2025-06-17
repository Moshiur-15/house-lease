import Booking from "@/app/Models/Booking";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const email = await searchParams.get("email");
  try {
    const bookings = await Booking.find({ sellerEmail: email });
    return NextResponse.json({ success: true, data: bookings });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}
