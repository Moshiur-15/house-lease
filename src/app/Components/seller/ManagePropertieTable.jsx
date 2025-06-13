"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ManagePropertieModal from "./ManagePropertieModal";

const ManagePropertieTable = ({ properties }) => {
  const [propertyList, setPropertyList] = useState(properties);
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id) => {
    setPropertyList((p) => p.filter((p) => p._id !== id));
    setOpenMenuId(null);
  };

 const tdStyle = "py-3 px-4 text-center text-nowrap border"

  return (
    <div className="p-4">
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              {["Title", "Location", "Beds", "Baths", "Price", "Status", "Actions"].map((head, key) => (
                <th
                  key={key}
                  className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {propertyList?.slice().reverse().map((property) => (
              <tr key={property._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200">
                <td className={`${tdStyle}`}>{property.title}</td>
                <td className={`${tdStyle}`}>{property.location}</td>
                <td className={`${tdStyle}`}>{property.beds}</td>
                <td className={`${tdStyle}`}>{property.baths}</td>
                <td className={`${tdStyle}`}>{property.price.toLocaleString()}</td>
                <td className={`${tdStyle}`}>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    property.status === "sold"
                      ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white"
                      : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"
                  }`}>
                    {property.status}
                  </span>
                </td>
                <td className={`${tdStyle}`}>
                  <button
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                    onClick={() => toggleMenu(property._id)}
                  >
                    <BsThreeDotsVertical className="text-xl" />
                  </button>

                  {openMenuId === property._id && (
                    <ManagePropertieModal propertyId={property._id} onDelete={handleDelete} />
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