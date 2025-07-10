import Booking from "@/app/Models/Booking";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") || "";
  const search = searchParams.get("search")?.toLowerCase() || "";
  const num = Number(search);
  const isNum = !isNaN(num);

  try {
    let filter = { sellerEmail: email };

    if (search) {
      filter = {
        ...filter,
        $or: [
          { PropertyName: { $regex: search, $options: "i" } },
          { PaymentStatus: { $regex: search, $options: "i" } },
          ...(isNum ? [{ PropertyFees: num }] : []),
        ],
      };
    }

    const bookings = await Booking.find(filter);

    return NextResponse.json({ success: true, data: bookings });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}
