import Booking from "@/app/Models/Booking";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") || "";
  const search = searchParams.get("search")?.toLowerCase() || "";

  try {
    let filter = { sellerEmail: email };

    if (search) {
      filter = {
        ...filter,
        $or: [
          { PropertyName: { $regex: search, $options: "i" } },
          { BuyerName: { $regex: search, $options: "i" } },
        ],
      };
    }

    const bookings = await Booking.find(filter);

    return NextResponse.json({ success: true, data: bookings });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}
