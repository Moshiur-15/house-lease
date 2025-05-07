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

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const payments = [
    {
      id: 1,
      propertyName: "Mountain Retreat Cabin",
      price: 3200,
      bedrooms: 3,
      bathrooms: 2,
      date: "2025-05-01",
      status: "Completed",
    },
    {
      id: 2,
      propertyName: "Lakeside Villa",
      price: 2800,
      bedrooms: 2,
      bathrooms: 2,
      date: "2025-04-01",
      status: "Completed",
    },
    {
      id: 3,
      propertyName: "Urban Studio",
      price: 1500,
      bedrooms: 1,
      bathrooms: 1,
      date: "2025-03-01",
      status: "Pending",
    },
    {
      id: 4,
      propertyName: "Countryside Cottage",
      price: 2100,
      bedrooms: 2,
      bathrooms: 1,
      date: "2025-02-15",
      status: "Completed",
    },
    {
      id: 5,
      propertyName: "Beachfront Condo",
      price: 3900,
      bedrooms: 4,
      bathrooms: 3,
      date: "2025-01-20",
      status: "Completed",
    },
    {
      id: 6,
      propertyName: "Hilltop Mansion",
      price: 5100,
      bedrooms: 5,
      bathrooms: 5,
      date: "2024-12-01",
      status: "Pending",
    },
    {
      id: 7,
      propertyName: "Countryside Cottage",
      price: 2100,
      bedrooms: 2,
      bathrooms: 1,
      date: "2025-02-15",
      status: "Completed",
    },
    {
      id: 8,
      propertyName: "Beachfront Condo",
      price: 3900,
      bedrooms: 4,
      bathrooms: 3,
      date: "2025-01-20",
      status: "Completed",
    },
    {
      id: 9,
      propertyName: "Hilltop Mansion",
      price: 5100,
      bedrooms: 5,
      bathrooms: 5,
      date: "2024-12-01",
      status: "Pending",
    },
  ];

  const filteredPayments = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return payments.filter((p) =>
      p.propertyName.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

  const paginatedPayments = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPayments.slice(start, start + itemsPerPage);
  }, [filteredPayments, currentPage]);

  const handlePageChange = (number) => {
    if (number >= 1 && number <= totalPages) {
      setCurrentPage(number);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Payment History
        </h2>
        <input
          type="text"
          placeholder="Search properties..."
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
              <TableHead>Property Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Bedrooms</TableHead>
              <TableHead>Bathrooms</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white dark:bg-gray-900">
            {paginatedPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.propertyName}</TableCell>
                <TableCell>${payment.price.toLocaleString()}</TableCell>
                <TableCell>{payment.bedrooms}</TableCell>
                <TableCell>{payment.bathrooms}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded ${
                      payment.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
                    }`}
                  >
                    {payment.status}
                  </span>
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

export default PaymentHistory;
