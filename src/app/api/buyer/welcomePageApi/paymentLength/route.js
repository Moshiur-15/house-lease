import Payment from "@/app/Models/payment";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("email");

  try {
    const lengthResult = await Payment.aggregate([
      { $match: { email: userEmail } },
      { $count: "paymentCount" }
    ]);

    const paymentCount = lengthResult[0]?.paymentCount || 0;

    return NextResponse.json({ paymentCount });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get payment count", error: error.message },
      { status: 500 }
    );
  }
}
