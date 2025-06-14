'use client'; 
import axios from "axios";
import Link from "next/link";
import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const ManageBlogModal = ({ BlogId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs?id=${BlogId}`);
      alert("Blog deleted");
      onDelete(BlogId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <ul className="py-1">
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <FaEye className="text-blue-500" title="View" />
          <span className="text-sm text-gray-700 dark:text-gray-200">View</span>
        </li>
        <Link href={`/dashboard/manageBlog/${BlogId}`} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <FaEdit className="text-green-500" title="Edit" />
          <span className="text-sm text-gray-700 dark:text-gray-200">Edit</span>
        </Link>
        <button
        onClick={handleDelete}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer w-full"
        >
          <FaTrash className="text-red-500" title="Delete" />
          <span className="text-sm text-gray-700 dark:text-gray-200">Delete</span>
        </button>
      </ul>
    </div>
  );
};

export default ManageBlogModal;
