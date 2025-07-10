"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ManageBlogModal from "./ManageBlogModal";

const ManageBlogTable = ({ blog, onDelete, loading }) => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const tdStyle = "p-3 border text-nowrap dark:border-gray-700";

  return (
    <div className="px-4 py-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-auto lg:min-w-[1080px] mx-auto border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <thead className="bg-gray-100 text-left dark:bg-gray-800 dark:text-gray-200">
            <tr>
              <th className="p-3 border dark:border-gray-700">ID</th>
              <th className="p-3 border dark:border-gray-700">TITLE</th>
              <th className="p-3 border dark:border-gray-700">DATE</th>
              <th className="p-3 border dark:border-gray-700">LOCATION</th>
              <th className="p-3 border dark:border-gray-700">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-5 text-gray-500 dark:text-gray-400"
                >
                  Loading...
                </td>
              </tr>
            ) : blog?.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-5 text-red-500">
                  No blogs found.
                </td>
              </tr>
            ) : (
              blog
                ?.slice()
                .reverse()
                .map((blog, index) => (
                  <tr
                    key={blog._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td
                      className={`${tdStyle} text-gray-900 dark:text-gray-100`}
                    >
                      {index + 1}
                    </td>
                    <td
                      className={`${tdStyle} text-gray-900 dark:text-gray-100`}
                    >
                      {blog.CardTitle}
                    </td>
                    <td
                      className={`${tdStyle} text-gray-900 dark:text-gray-100`}
                    >
                      {blog.Date}
                    </td>
                    <td
                      className={`${tdStyle} text-gray-900 dark:text-gray-100`}
                    >
                      {blog.Location}
                    </td>
                    <td className="p-3 border text-center relative dark:border-gray-700">
                      <button
                        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                        onClick={() => toggleMenu(blog._id)}
                      >
                        <BsThreeDotsVertical className="text-xl text-gray-900 dark:text-gray-100" />
                      </button>

                      {openMenuId === blog._id && (
                        <ManageBlogModal
                          BlogId={blog._id}
                          onDelete={() => {
                            onDelete(blog._id);
                            setOpenMenuId(null);
                          }}
                        />
                      )}
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogTable;
