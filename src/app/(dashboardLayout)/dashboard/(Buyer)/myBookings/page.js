"use client";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import FeedBackModal from "@/app/Components/buyer/FeedBackModal";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchBookings = async () => {
      if (!session?.user?.email) return;
      const res = await axios.get(
        `/api/buyer/booking?email=${session.user.email}`
      );
      setBookings(res.data.data || []);
    };
    fetchBookings();
  }, [session?.user?.email]);

  const filteredBookings = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return bookings.filter((booking) =>
      booking.PropertyName?.toLowerCase().includes(term)
    );
  }, [searchTerm, bookings]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this booking?");
    if (!confirm) return;

    try {
      await axios.delete(`/api/buyer/booking?id=${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      alert("Failed to delete");
    }
  };

  const handlePay = () => {
    alert("processing...");
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between space-y-3 mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          MY BOOKINGS
        </h2>
        <input
          type="text"
          placeholder="Search by property..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[20rem] py-2 px-4 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="text-left px-4 py-3">
                Property Name
              </TableHead>
              <TableHead className="text-left px-4 py-3">Fees</TableHead>
              <TableHead className="text-left px-4 py-3">Buyer</TableHead>
              <TableHead className="text-left px-4 py-3">Payment</TableHead>
              <TableHead className="text-left px-4 py-3">
                Confirmation
              </TableHead>
              <TableHead className="text-center px-4 py-3">Action</TableHead>
              <TableHead className="text-center px-4 py-3">Feedback</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white dark:bg-gray-900">
            {filteredBookings.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No bookings found.
                </TableCell>
              </TableRow>
            ) : (
              filteredBookings.map((booking) => (
                <TableRow
                  key={booking._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <TableCell className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">
                    {booking.PropertyName}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    {booking.PropertyFees}৳
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    {booking.BuyerName}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    {booking.PaymentStatus.toLowerCase() === "unpaid" ? (
                      <button
                        onClick={handlePay}
                        className="px-3 py-1 text-sm bg-green-500 text-white hover:bg-green-600"
                      >
                        Pay
                      </button>
                    ) : (
                      <button
                        className="px-3 py-1 text-sm bg-green-500 text-white cursor-default"
                        disabled
                      >
                        Paid
                      </button>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold ${
                        booking.ConfirmationStatus.toLowerCase() === "pending"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-red-100"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                      }`}
                    >
                      {booking.ConfirmationStatus}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center space-x-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(booking._id)}
                      title="Delete Booking"
                      disabled={
                        booking.ConfirmationStatus.toLowerCase() === "paid" ||
                        booking.ConfirmationStatus.toLowerCase() === "confirmed"
                      }
                      className={
                        booking.ConfirmationStatus.toLowerCase() === "paid" ||
                        booking.ConfirmationStatus.toLowerCase() === "confirmed"
                          ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                          : ""
                      }
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    {booking.ConfirmationStatus.toLowerCase() === "confirmed" &&
                    booking.PaymentStatus.toLowerCase() === "paid" ? (
                      <button
                        onClick={() => {
                          setSelectedBooking(booking);
                          setShowModal(true);
                        }}
                        className="px-3 py-1 text-sm bg-indigo-500 text-white hover:bg-indigo-600"
                      >
                        Give Feedback
                      </button>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Feedback Modal */}
      {showModal && selectedBooking && (
        <FeedBackModal
          booking={selectedBooking}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default MyBookings;
