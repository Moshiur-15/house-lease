import { deleteBlog, getBlogs, postBlog } from "@/app/controllers/admin/blogs";
import connectDB from "@/app/utils/database";

export async function GET(req){
    await connectDB();
    return getBlogs(req);
}

export async function POST(req){
    await connectDB();
    return postBlog(req);
}

export async function DELETE(req){
    await connectDB();
    return deleteBlog(req);
}

