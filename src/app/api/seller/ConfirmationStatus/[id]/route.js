
import Booking from "@/app/Models/Booking";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  await connectDB();

  try {
    const { id } =await params;
    const { newStatus } = await req.json();

    const updated = await Booking.findByIdAndUpdate(
      id,
      { ConfirmationStatus: newStatus },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

