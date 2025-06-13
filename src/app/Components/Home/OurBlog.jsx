import React from "react";
import Title from "../Sherd/Title";
import BlogCard from "./BlogCard";
import GetBlog from "../Admin/GetBlog";

const OurBlog = async() => {
  const blog = await GetBlog();
  
  return (
    <div className="px-4 sm:px-6 lg:px-24">
      <Title h2="NEWS" p="Our Blog" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blog?.slice().reverse().slice(0, 6).map((blog, index) => (
         <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
