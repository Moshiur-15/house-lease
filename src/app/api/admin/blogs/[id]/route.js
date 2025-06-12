import { updateBlog, updateBlogData } from "@/app/controllers/admin/blogs";
import connectDB from "@/app/utils/database";

export async function PUT(req, { params }) {
  const { id } = params;
  await connectDB();
  return updateBlog(req, id);
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  return updateBlogData(req, id);
}
