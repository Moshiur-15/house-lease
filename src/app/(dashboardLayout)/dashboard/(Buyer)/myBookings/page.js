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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import bookingDetails from '../../../../../fakeapi/page'
const MyBookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredBookings = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return bookingDetails.filter(
      (booking) =>
        booking.title.toLowerCase().includes(term) ||
        booking.location.toLowerCase().includes(term) ||
        booking.status.toLowerCase().includes(term) ||
        booking.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

  const paginatedBookings = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBookings.slice(start, start + itemsPerPage);
  }, [filteredBookings, currentPage]);

  const handlePageChange = ( number) => {
    if (number >= 1 && number <= totalPages) {
      setCurrentPage(number);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          My Bookings
        </h2>
        <input
          type="text"
          placeholder="Search bookings..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to page 1 when searching
          }}
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3 rounded"
        />
      </div>

      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Bedrooms</TableHead>
              <TableHead>Bathrooms</TableHead>
              <TableHead>Square Feet</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white dark:bg-gray-900">
            {paginatedBookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell>{booking.title.slice(0, 14)}</TableCell>
                <TableCell>{booking.location}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      booking.status === "For Sale"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100"
                    }`}
                  >
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell>{booking.bedrooms}</TableCell>
                <TableCell>{booking.bathrooms}</TableCell>
                <TableCell>{booking.sqft} sqft</TableCell>
                <TableCell>{booking.category}</TableCell>
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

export default MyBookings;
