"use client"
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ManageBlogModal from "./ManageBlogModal";

const blogData = [
  {
    _id: 1,
    CardTitle: "Finding Your Dream Rental",
    DetailTitle: "A Comprehensive Guide to Finding Your Dream Rental Home Easily",
    CardDes:
      "Looking for the perfect rental home can be overwhelming, but knowing your needs, preferences, and budget will make the entire process much smoother and successful.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-05",
    Location: "USA",
  },
  {
    _id: 2,
    CardTitle: "Finding Your Dream Rental",
    DetailTitle: "A Comprehensive Guide to Finding Your Dream Rental Home Easily",
    CardDes:
      "Looking for the perfect rental home can be overwhelming, but knowing your needs, preferences, and budget will make the entire process much smoother and successful.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-05",
    Location: "USA",
  },
  {
    _id: 3,
    CardTitle: "Finding Your Dream Rental",
    DetailTitle: "A Comprehensive Guide to Finding Your Dream Rental Home Easily",
    CardDes:
      "Looking for the perfect rental home can be overwhelming, but knowing your needs, preferences, and budget will make the entire process much smoother and successful.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-05",
    Location: "USA",
  },
  {
    _id: 4,
    CardTitle: "Finding Your Dream Rental",
    DetailTitle: "A Comprehensive Guide to Finding Your Dream Rental Home Easily",
    CardDes:
      "Looking for the perfect rental home can be overwhelming, but knowing your needs, preferences, and budget will make the entire process much smoother and successful.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    Date: "2025-10-05",
    Location: "USA",
  },
  
];

const ManageBlogTable = () => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="px-4 py-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg shadow-sm">
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
            {blogData.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className="p-3 border">{blog._id}</td>
                <td className="p-3 border">{blog.CardTitle}</td>
                <td className="p-3 border">{blog.Date}</td>
                <td className="p-3 border">{blog.Location}</td>
                <td className="p-2 border overflow-hidden">
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
                    <ManageBlogModal BlogId={blog._id} />
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
