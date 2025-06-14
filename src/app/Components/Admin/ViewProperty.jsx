"use client";

import axios from "axios";
import { useState } from "react";

const ViewProperty = ({ properties }) => {
  const [property, setProperty] = useState(properties);
  const [loadingId, setLoadingId] = useState(null);
  const handleDelete = async (id) => {
    setLoadingId(id);
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/property?id=${id}`
      );
      alert("Property deleted");
      setProperty((p) => p.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 dark:border-gray-700 text-center">
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
            ].map((head, key) => (
              <th
                key={key}
                className="py-3 border-b border-gray-300 dark:border-gray-700 text-sm lg:text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {property.map((property) => (
            <tr
              key={property._id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
            >
              <td className="py-1 sm:py-3 px-2 sm:px-4 text-nowrap text-sm lg:text-lg">
                {property.title}
              </td>
              <td className="py-1 sm:py-3 px-2 sm:px-4 text-nowrap text-sm lg:text-lg">
                {property.location}
              </td>
              <td className="py-1 sm:py-3 px-2 sm:px-4 text-center text-sm lg:text-lg">
                {property.beds}
              </td>
              <td className="py-3 px-4 text-center">{property.baths}</td>
              <td className="py-1 sm:py-3 px-2 sm:px-4 text-center text-sm lg:text-lg">
                {property.price.toLocaleString()}
              </td>
              <td className="py-1 sm:py-3 px-2 sm:px-4 text-center capitalize text-sm lg:text-lg">
                <span
                  className={`px-2 py-1 text-xs font-medium ${
                    property.status === "sold"
                      ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white"
                      : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"
                  }`}
                >
                  {property.status}
                </span>
              </td>
              <td className="py-1 sm:py-3 px-2 sm:px-4 text-center relative text-sm lg:text-lg">
                <button
                  className="text-red-500 font-bold p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                  onClick={() => handleDelete(property._id)}
                >
                  {loadingId === property._id ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProperty;
