"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";

export default function SuccessClient() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    const updatePaymentStatus = async () => {
      if (!bookingId || !session?.user?.email) return;

      try {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/buyer/booking`,
          {
            bookingId,
            email: session.user.email,
            status: "paid",
          }
        );
        const { PropertyFees, PropertyName, ConfirmationStatus, PaymentStatus } =
          res.data.data || {};

        if (PaymentStatus === "paid") {
          try {
            const paymentRes = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/api/buyer/payment`,
              {
                PropertyName,
                PropertyFees,
                email: session.user.email,
                PaymentStatus,
                ConfirmationStatus
              }
            );
            console.log("Payment data posted:", paymentRes.data);
          } catch (error) {
            console.error("Failed to post payment data:", error);
          }
        }
      } catch (error) {
        console.error(" Failed to update payment status:", error);
      }
    };

    updatePaymentStatus();
  }, [bookingId, session]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold text-green-600">PAYMENT SUCCESSFUL</h2>
      <p className="mt-2 text-gray-700">Your booking has been confirmed.</p>
      <div className="sm:flex flex-col items-center mt-6">
        <Link
          href="/dashboard/myBookings"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View My Bookings
        </Link>
        <Link
          href="/dashboard/paymentHistory"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Payment History
        </Link>
      </div>
    </div>
  );
}
