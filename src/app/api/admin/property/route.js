import addProperty from "@/app/Models/addProperty";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

// get property
export async function GET(req) {
  await connectDB();
  const property = await addProperty.find();
  return NextResponse.json({ message: "Get post data", status: 200, property });
}
