import Blogs from "@/app/Models/Blogs";
import { NextResponse } from "next/server";

// get blog
export const getBlogs = async (req) => {
  const blog = await Blogs.find();
  return NextResponse.json({ message: "Get data", blog });
};

// updateBlog
export const updateBlog = async (req, id) => {
  const body = await req.json();
  const blog = await Blogs.findByIdAndUpdate(id, body);
  return NextResponse.json({ message: "Update data", blog });
};

// update Blog data
export const updateBlogData = async (req, id) => {
  const blog = await Blogs.findOne({ _id: id });
  return NextResponse.json({ message: "Update single data", blog });
};

// post blog
export const postBlog = async (req) => {
  const data = await req.json();
  const blog = await Blogs.create(data);
  return NextResponse.json({ message: "Blog created successfully", blog });
};

// delete blog
export const deleteBlog = async (req) => {
  const id = await req.nextUrl.searchParams.get("id");
  const blog = await Blogs.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted successfully", blog });
};

// get single blog
export const getSingleBlog = async (req, id) => {
  try {
    const blog = await Blogs.findById(id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Get single data", blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
};
