import addProperty from "@/app/Models/addProperty";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  try {
    const length = await addProperty.aggregate([
      { $match: { status: "Rent" } },
      { $count: "data_length" },
    ]);
    return NextResponse.json({ message: "Property data length", length });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed property data", error: error.message },
      { status: 500 }
    );
  }
}
