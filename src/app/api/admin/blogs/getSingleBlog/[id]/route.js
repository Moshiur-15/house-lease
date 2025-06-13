import { getSingleBlog } from "@/app/controllers/admin/blogs";
import connectDB from "@/app/utils/database";

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB()
  return getSingleBlog(req, id)
}
