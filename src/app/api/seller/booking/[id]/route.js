import connectDB from "@/app/utils/database";
import Booking from "@/app/Models/Booking";
import { NextResponse } from "next/server";

// PATCH method
export async function PATCH(req, { params }) {
  await connectDB();
  const { id } = await params;
  const { newStatus } = await req.json();

  try {
    const updated = await Booking.findByIdAndUpdate(
      id,
      { ConfirmationStatus: newStatus },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Confirmation status updated",
      data: updated,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } =await params;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    await Booking.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: "Booking deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
