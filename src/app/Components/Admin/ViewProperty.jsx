"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DeleteModal from "./DeleteModal";

const ViewProperty = ({ properties }) => {
  const [loadingId, setLoadingId] = useState(null);
  const [property, setProperty] = useState(properties);
  const [deleteId, setDeleteId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  console.log(properties)

  // set data from props
  useEffect(() => {
    setProperty(properties);
  }, [properties]);

  // When Delete button clicked
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  // Final confirm delete
  const confirmDelete = async () => {
    if (!deleteId) return;
    setLoadingId(deleteId);
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/property?id=${deleteId}`
      );
      toast.success("Property deleted");
      setProperty((prev) => prev.filter((item) => item._id !== deleteId));
    } catch (err) {
      console.error(err);
      toast.error("Delete failed. Please try again.");
    } finally {
      setLoadingId(null);
      setDeleteId(null);
      setModalOpen(false);
    }
  };

  return (
    <div className="overflow-x-auto relative">
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
          {property?.map((property) => (
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
                  className={`px-2 py-1 text-xs font-medium whitespace-nowrap ${
                    property.status === "for sale"
                      ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white"
                      : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"
                  }`}
                >
                  {property.status}
                </span>
              </td>
              <td className="py-1 sm:py-3 px-2 sm:px-4 text-center relative text-sm">
                <button
                  className="py-1 px-4 bg-gray-200  text-red-500 font-bold p-2 hover:bg-red-100 dark:hover:bg-gray-700 transition"
                  onClick={() => handleDeleteClick(property._id)}
                  disabled={loadingId === property._id}
                >
                  {loadingId === property._id ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ViewProperty;
