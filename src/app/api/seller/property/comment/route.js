import CommentProperty from "@/app/Models/CommentProperty";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const { email, name, comment, propertyId } = await req.json();

  try {
    const newComment = await CommentProperty.create({ email, name, comment, propertyId });
    return NextResponse.json({ success: true, data: newComment });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  await connectDB();
  const propertyId = req.nextUrl.searchParams.get("propertyId");

  if (!propertyId) {
    return NextResponse.json({ success: false, error: "Property ID is required" }, { status: 400 });
  }

  try {
    const comments = await CommentProperty.find({ propertyId }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: comments });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
