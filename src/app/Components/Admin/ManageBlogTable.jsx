"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ManageBlogModal from "./ManageBlogModal";

const ManageBlogTable = ({ blog }) => {
  const [blogs, setBlog] = useState(blog);
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const onDelete = (id) => {
    setBlog((p) => p.filter((p) => p._id !== id));
    setOpenMenuId(null);
  };

  const tdStyle = "p-3 border text-nowrap";
  return (
    <div className="px-4 py-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-auto lg:min-w-[1280px] mx-auto border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">TITLE</th>
              <th className="p-3 border">DATE</th>
              <th className="p-3 border">LOCATION</th>
              <th className="p-3 border">IMAGE</th>
              <th className="p-3 border">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog, index) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className={`${tdStyle}`}>{index + 1}</td>
                <td className={`${tdStyle}`}>{blog.CardTitle}</td>
                <td className={`${tdStyle}`}>{blog.Date}</td>
                <td className={`${tdStyle}`}>{blog.Location}</td>
                <td className={`${tdStyle} overflow-hidden `}>
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-[50px] object-cover mx-auto"
                  />
                </td>
                <td className="p-3 border text-center relative">
                  <button
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                    onClick={() => toggleMenu(blog._id)}
                  >
                    <BsThreeDotsVertical className="text-xl" />
                  </button>

                  {openMenuId === blog._id && (
                    <ManageBlogModal BlogId={blog._id} onDelete={onDelete} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogTable;
