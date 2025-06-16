
import CommentBlog from "@/app/Models/CommentBlog";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const { email, name, comment, blogId } = await req.json();

  try {
    const newComment = await CommentBlog.create({ email, name, comment, blogId });
    console.log(newComment)
    return NextResponse.json({ success: true, data: newComment });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  await connectDB();
  const blogId = req.nextUrl.searchParams.get("blogId");

  if (!blogId) {
    return NextResponse.json({ success: false, error: "blog ID is required" }, { status: 400 });
  }

  try {
    const comments = await CommentBlog.find({ blogId }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: comments });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
