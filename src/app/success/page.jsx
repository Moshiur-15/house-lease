"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function Success() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    const updatePaymentStatus = async () => {
      if (!bookingId || !session?.user?.email) return;

      try {
        const res = await axios.patch("/api/buyer/booking", {
          bookingId,
          email: session.user.email,
          status: "paid",
        });

        console.log("✅ Payment status updated:", res.data);
      } catch (error) {
        console.error("❌ Failed to update payment status:", error);
      }
    };

    updatePaymentStatus();
  }, [bookingId, session]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold text-green-600">PAYMENT SUCCESSFUL</h2>
      <p className="mt-2 text-gray-700">Your booking has been confirmed.</p>
      <a href="/dashboard/myBookings" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        View My Bookings
      </a>
    </div>
  );
}