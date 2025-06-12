import GetBlog from "@/app/Components/Admin/GetBlog";
import GetSingleBlog from "@/app/Components/Admin/GetSingleBlog";
import ManageBlogTable from "@/app/Components/Admin/ManageBlogTable";
import React from "react";

const ManageBlog = async () => {
  const blog = await GetBlog();

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between space-y-3 p-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE BLOGS
        </h2>
        <input
          type="text"
          placeholder="Search Blogs..."
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
        />
      </div>
      <ManageBlogTable blog={blog} />
    </div>
  );
};

export default ManageBlog;
