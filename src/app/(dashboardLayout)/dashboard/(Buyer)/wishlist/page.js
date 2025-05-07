"use client";
import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import wishlistData from "../../../../../fakeapi/wishlist/page";

const Wishlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredWishlist = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return wishlistData.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term) ||
        item.status.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredWishlist.length / itemsPerPage);

  const paginatedWishlist = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredWishlist.slice(start, start + itemsPerPage);
  }, [filteredWishlist, currentPage]);

  const handlePageChange = (number) => {
    if (number >= 1 && number <= totalPages) {
      setCurrentPage(number);
    }
  };

  return (
    <div className="p-4 mx-auto">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Wishlist
        </h2>
        <input
          type="text"
          placeholder="Search wishlist..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3 rounded"
        />
      </div>

      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                Image
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                Title
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                Location
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                Status
              </TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white dark:bg-gray-900">
            {paginatedWishlist.map((item) => (
              <TableRow
                key={item.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <TableCell className="p-1 border-r border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <img
                    src={item.cardImage}
                    alt={item.title}
                    className="w-full h-[50px] object-cover mx-auto"
                  />
                </TableCell>

                <TableCell className="font-medium text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700">
                  {item.title}
                </TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  {item.location}
                </TableCell>
                <TableCell className="text-center border-r border-gray-200 dark:border-gray-700">
                  <span
                    className={`px-2 py-1 text-xs font-medium ${
                      item.status === "For Sale"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300 flex space-x-3 text-xl mt-1.5 mx-3">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500">
                    <AiOutlineEye className="inline-block" />
                  </button>
                  <button className="text-red-600 dark:text-red-400 hover:text-red-500">
                    <AiOutlineDelete className="inline-block" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 3 && currentPage < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}...

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Wishlist;
