"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useSession } from "next-auth/react";
import DeleteModal from "@/app/Components/Admin/DeleteModal";

const Wishlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlistData, setWishlistData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();
  const email = session?.user?.email;

  const fetchWishlist = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/buyer?search=${searchTerm}`,
        { params: { userEmail: email } }
      );
      setWishlistData(res.data);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  useEffect(() => {
    if (email) {
      fetchWishlist();
    }
  }, [email, searchTerm]);

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/buyer`, {
        data: { id: selectedId },
      });
      setWishlistData((prev) => prev.filter((item) => item._id !== selectedId));
    } catch (err) {
      console.error("Error deleting wishlist item:", err);
    } finally {
      setIsModalOpen(false);
      setSelectedId(null);
    }
  };

  return (
    <div className="p-4 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between space-y-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Wishlist
        </h2>
        <input
          type="text"
          placeholder="Search wishlist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[20rem] py-2 px-4 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="text-gray-700 dark:text-gray-300 ">
                Image
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 ">
                Title
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">
                Location
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 ">
                Status
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white dark:bg-gray-900">
            {wishlistData?.map((item) => (
              <TableRow
                key={item._id}
                className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <TableCell className="p-1 dark:border-gray-700">
                  <img
                    src={item.cardImage}
                    alt={item.title}
                    className="w-full h-[50px] object-cover mx-auto"
                  />
                </TableCell>
                <TableCell className="font-medium text-gray-800 dark:text-gray-100 dark:border-gray-700">
                  {item.title}
                </TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300  dark:border-gray-700">
                  {item.location}
                </TableCell>
                <TableCell className="text-center  dark:border-gray-700">
                  <span
                    className={`px-2 py-1 text-xs font-medium ${
                      item.status === "Rent"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-700 justify-center dark:text-gray-300 flex space-x-3 text-xl mt-1.5 mx-3">
                  <button
                    onClick={() => {
                      setSelectedId(item._id);
                      setIsModalOpen(true);
                    }}
                    className="px-4 py-1 text-xs sm:text-sm text-white transition bg-red-600 hover:bg-red-700"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
            {wishlistData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center p-4 text-gray-500"
                >
                  No wishlist items found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Wishlist;
