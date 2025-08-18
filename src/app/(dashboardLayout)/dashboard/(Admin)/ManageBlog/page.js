"use client";

import React, { useState, useEffect } from "react";
import GetBlog from "@/app/Components/Admin/GetBlog";
import ManageBlogTable from "@/app/Components/Admin/ManageBlogTable";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await GetBlog(searchTerm);
      setBlogs(data);
    };
    fetchBlogs();
  }, [searchTerm]);

  // delete
  const handleDelete = (id) => {
    setBlogs((p) => p.filter((blog) => blog._id !== id));
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row items-start lg:items-center justify-between gap-4 p-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE BLOGS
        </h2>
        <input
          type="text"
          placeholder="Search Blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-0 focus:ring-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition"
        />
      </div>

      <ManageBlogTable blog={blogs} onDelete={handleDelete} />
    </div>
  );
};

export default Page;
