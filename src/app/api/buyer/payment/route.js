import Payment from "@/app/Models/payment";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  try {
    const data = await req.json();
    const newPayment = await Payment.create(data);

    return NextResponse.json(
      { message: "Payment data saved successfully", data: newPayment },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error saving payment:", err);
    return NextResponse.json(
      { error: "Database operation failed" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await connectDB();
  const email = await req.nextUrl.searchParams.get("email");

  try {
    const payments = await Payment.find({ email }).sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Payment data retrieved successfully", data: payments },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error retrieving payments:", err);
    return NextResponse.json(
      { error: "Database operation failed" },
      { status: 500 }
    );
  }
}
