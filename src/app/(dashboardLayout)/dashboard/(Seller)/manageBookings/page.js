"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import ManageBookingsTable from "@/app/Components/seller/ManageBookingsTable";

const ManageBookings = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;

  const [searchTerm, setSearchTerm] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch bookings on email or searchTerm change
  useEffect(() => {
    const fetchBookings = async () => {
      if (!email) return;

      setLoading(true);
      try {
        const params = new URLSearchParams({
          email,
          search: searchTerm,
        });

        const res = await axios.get(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/api/seller/booking?${params.toString()}`
        );

        setBookings(res.data.data || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Failed to load bookings");
      }
      setLoading(false);
    };

    fetchBookings();
  }, [email, searchTerm]);

  // Delete
  const handleDeleteBooking = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/booking/${id}`
      );
      setBookings((prev) => prev.filter((b) => b._id !== id));
      toast.success(res.data.message || "Booking deleted successfully");
    } catch (err) {
      console.error("Error deleting booking:", err.message);
      toast.error("Something went wrong while deleting the booking.");
    }
  };

  return (
    <section className="my-5 lg:my-10">
      <div className="flex flex-col lg:flex-row justify-between space-y-3 mb-6 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE YOUR BOOKINGS
        </h2>
        <input
          type="text"
          placeholder="Search Bookings..."
          className="border border-gray-300 focus:outline-none  dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ManageBookingsTable
        bookings={bookings}
        loading={loading}
        setBookings={setBookings}
        onDelete={handleDeleteBooking}
      />
    </section>
  );
};

export default ManageBookings;
