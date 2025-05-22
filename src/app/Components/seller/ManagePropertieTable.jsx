"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ManagePropertieTable = ({ properties }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenuId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-4">
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              {[
                "Title",
                "Location",
                "Beds",
                "Baths",
                "Price",
                "Status",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr
                key={property.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
              >
                <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 whitespace-nowrap">
                  {property.title}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  {property.location}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center whitespace-nowrap">
                  {property.beds}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center whitespace-nowrap">
                  {property.baths}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center whitespace-nowrap">
                  {property.price.toLocaleString()}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center capitalize whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      property.status === "sold"
                        ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white"
                        : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
                <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center relative overflow-visible whitespace-nowrap">
                  <button
                    onClick={() => toggleMenu(property.id)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                    aria-label="Open action menu"
                  >
                    <BsThreeDotsVertical className="text-xl" />
                  </button>

                  {openMenuId === property.id && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                    >
                      <ul className="py-1">
                        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                          <FaEye className="text-blue-500" title="View" />
                          <span className="text-sm text-gray-700 dark:text-gray-200">
                            View
                          </span>
                        </li>
                        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                          <FaEdit className="text-green-500" title="Edit" />
                          <span className="text-sm text-gray-700 dark:text-gray-200">
                            Edit
                          </span>
                        </li>
                        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                          <FaTrash className="text-red-500" title="Delete" />
                          <span className="text-sm text-gray-700 dark:text-gray-200">
                            Delete
                          </span>
                        </li>
                      </ul>
                    </div>
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

export default ManagePropertieTable;
