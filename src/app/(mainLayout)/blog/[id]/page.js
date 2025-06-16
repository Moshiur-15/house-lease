import GetBlog from "@/app/Components/Admin/GetBlog";
import GetSingleBlog from "@/app/Components/Admin/GetSingleBlog";
import BlogAside from "@/app/Components/Home/BlogAside";
import BlogComment from "@/app/Components/Home/BlogComment";
import BlogDetails from "@/app/Components/Home/BlogDetails";
import ShowBlogComment from "@/app/Components/Home/ShowBlogComment";
import React from "react";

const BlogId = async({ params }) => {
  const param = await params;
  const id = param.id;
  const singleBlog = await GetSingleBlog(id);
  const resentBlog = await GetBlog(); 
  console.log(singleBlog)
  return (
    <div className="container mx-auto lg:flex gap-10 px-6.5 lg:px-5.5">
      {/* details data */}
      <section className="w-full lg:w-4/6 min-h-96">
        <BlogDetails detail={singleBlog} />
        {/* show Comment */}
        <ShowBlogComment blogId={id} />
        {/* Comment input */}
        <BlogComment blogId={id} />
      </section>
      {/* sideber */}
      <aside className="w-full lg:w-2/6 h-fit sticky top-12">
        <BlogAside resentBlog={resentBlog} />
      </aside>
    </div>
  );
};

export default BlogId;
