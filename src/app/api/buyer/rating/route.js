import Rating from "@/app/Models/rating";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const rating = await Rating.create(data);
    return NextResponse.json({
      message: "Rating created successfully",
      rating,
    });
  } catch (error) {
    console.error("Error in POST /api/buyer/rating:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await connectDB();
  try {
    const ratings = await Rating.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: ratings });
  } catch (error) {
    console.error("Error in GET /api/buyer/rating:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch ratings", error },
      { status: 500 }
    );
  }
}
