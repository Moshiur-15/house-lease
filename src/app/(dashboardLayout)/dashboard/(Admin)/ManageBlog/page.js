import GetBlog from "@/app/Components/Admin/GetBlog";
import ManageBlogTable from "@/app/Components/Admin/ManageBlogTable";
import React from "react";

const ManageBlog = async () => {
  const blog = await GetBlog();

  return (
    <div>
      <div className="flex flex-col xl:flex-row items-start lg:items-center justify-between gap-4 p-4 lg:mx-52 xl:mx-[215px]">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE BLOGS
        </h2>
        <input
          type="text"
          placeholder="Search Blogs..."
          className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-0 focus:ring-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition"
        />
      </div>

      <ManageBlogTable blog={blog} />
    </div>
  );
};

export default ManageBlog;
