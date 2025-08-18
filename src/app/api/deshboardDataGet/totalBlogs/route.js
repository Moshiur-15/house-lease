import Blogs from "@/app/Models/Blogs";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";


export async function GET(req) {
  await connectDB();

  // aggregation pipeline: select only title, description
  const blogs = await Blogs.aggregate([
    {
      $project: {
        _id: 0,
        CardTitle: 1,
      }
    }
  ]);

  // যদি count ও পাঠাতে চাও
  const totalBlogs = blogs.length;

  return NextResponse.json({
    totalBlogs,
    blogs, // [{ title, description }, ...]
  });
}