"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ManagePropertieModal from "./ManagePropertieModal";
import axios from "axios";
import { toast } from "sonner";

const ManagePropertieTable = ({ properties, loading, setProperties }) => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/seller/property/${id}`);
      setProperties((prev) => prev.filter((p) => p._id !== id));
      toast.success("Property deleted successfully");
      setOpenMenuId(null);
    } catch (error) {
      toast.error("Failed to delete property");
      console.error(error);
    }
  };

  const tdStyle = "py-3 px-4 text-center text-nowrap border";

  return (
    <div className="overflow-x-auto max-w-full">
      <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
        <thead className="bg-gray-100 dark:bg-gray-800 text-center">
          <tr>
            {["Title", "Location", "Beds", "Baths", "Price", "Status", "Actions"].map(
              (head, key) => (
                <th
                  key={key}
                  className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {head}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="7" className="py-8 text-center">
                Loading...
              </td>
            </tr>
          ) : properties.length === 0 ? (
            <tr>
              <td colSpan="7" className="py-8 text-center">
                No properties found.
              </td>
            </tr>
          ) : (
            properties
              .slice()
              .reverse()
              .map((property) => (
                <tr
                  key={property._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
                >
                  <td className={tdStyle}>{property.title}</td>
                  <td className={tdStyle}>{property.location}</td>
                  <td className={tdStyle}>{property.beds}</td>
                  <td className={tdStyle}>{property.baths}</td>
                  <td className={tdStyle}>{property.price.toLocaleString()}</td>
                  <td className={tdStyle}>
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
                  <td className={tdStyle}>
                    <button
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                      onClick={() => toggleMenu(property._id)}
                    >
                      <BsThreeDotsVertical className="text-xl" />
                    </button>

                    {openMenuId === property._id && (
                      <ManagePropertieModal
                        propertyId={property._id}
                        onDelete={handleDelete}
                      />
                    )}
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePropertieTable;
