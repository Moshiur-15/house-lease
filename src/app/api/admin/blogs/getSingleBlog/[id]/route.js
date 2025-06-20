import { getSingleBlog } from "@/app/controllers/admin/blogs";
import connectDB from "@/app/utils/database";

export async function GET(req, { params }) {
  const { id } = await params;
  await connectDB()
  return getSingleBlog(id)
}
