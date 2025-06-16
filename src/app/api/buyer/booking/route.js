import Booking from "@/app/Models/Booking";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const { BuyerEmail, propertyId } = data;
  try {
    const existingBooking = await Booking.findOne({ BuyerEmail, propertyId });
    if (existingBooking) {
      return NextResponse.json(
        { message: "You have already Booking this property." },
        { status: 400 }
      );
    }
    const bookingData = await Booking.create(data);
    return NextResponse.json({
      message: "Booking created successfully",
      booking: bookingData,
    });
  } catch (err) {
    return NextResponse.json({ message: "Error Post Booking", error: err });
  }
}



export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    const query = email ? { BuyerEmail: email } : {};
    const bookings = await Booking.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: bookings });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Failed to fetch bookings", error: err });
  }
}



export async function DELETE(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
  }
  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return NextResponse.json({ success: false, message: "Booking not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Booking deleted successfully." });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Error deleting booking", error: err });
  }
}
