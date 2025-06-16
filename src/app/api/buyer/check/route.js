import Wishlist from "@/app/Models/Wishlist";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");
  const propertyID = searchParams.get("propertyID");

  if (!userEmail || !propertyID) {
    return NextResponse.json("Missing data", { status: 400 });
  }

  const exists = await Wishlist.findOne({ userEmail, propertyID });

  return NextResponse.json({ exists: !!exists });
}
