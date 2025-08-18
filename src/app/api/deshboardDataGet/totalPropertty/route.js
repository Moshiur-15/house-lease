import addProperty from "@/app/Models/addProperty";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const allProperty = await addProperty.find();
  const totalProperty = allProperty.length;

  return NextResponse.json({ message: "Get property", allProperty, totalProperty });
}
