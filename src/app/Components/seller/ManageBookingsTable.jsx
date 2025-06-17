"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ManageBookingsTable = () => {
  const [bookings, setBookings] = useState([]);
  const { data: session } = useSession();
  const email = session?.user?.email;

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/booking?email=${email}`
      );
      setBookings(res.data.data || []);
    };
    if (email) fetchBookings();
  }, [email]);

  // confirmation update handler
  const handleConfirmationChange = async (id, newStatus) => {
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/booking/${id}`,
        { newStatus }
      );
      if (res.data.success) {
        // console.log("Updated:", res.data.data);
        toast("Confirmation Status Updated!");
        setBookings((prev) =>
          prev.map((b) =>
            b._id === id ? { ...b, ConfirmationStatus: newStatus } : b
          )
        );
      } else {
        console.error("Failed to update:", res.data.message);
      }
    } catch (err) {
      console.error("Error updating confirmation:", err.message);
    }
  };

  // delete booking
  const handleDeleteBooking = async (id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/booking/${id}`
      );
      setBookings((prev) => prev.filter((b) => b._id !== id));
      toast.success(res.data.message);
    } catch (err) {
      console.error("Error deleting booking:", err.message);
      toast.error("Something went wrong while deleting the booking.");
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 overflow-x-auto mx-4 border border-gray-200 dark:border-gray-700">
        <table className="min-w-full border-collapse text-left text-sm sm:text-base">
          <thead className="bg-gray-100 dark:bg-gray-900 uppercase text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
            <tr>
              {[
                "HOUSE NAME",
                "USER NAME",
                "FEE",
                "PAYMENT",
                "CONFIRMATION",
                "ACTION",
              ].map((head) => (
                <th
                  key={head}
                  className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 whitespace-nowrap font-semibold"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings?.map((b) => (
              <tr
                key={b._id}
                className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-gray-100">
                  {b.PropertyName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700 dark:text-gray-200">
                  {b.BuyerName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700 dark:text-gray-200">
                  {b.PropertyFees}
                </td>
                <td className="px-4 py-3 whitespace-nowrap font-semibold text-green-600 dark:text-green-400">
                  {b.PaymentStatus}
                </td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <select
                    value={b.ConfirmationStatus}
                    onChange={(e) =>
                      handleConfirmationChange(b._id, e.target.value)
                    }
                    disabled={b.PaymentStatus == "Paid"}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-100 focus:outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>
                </td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteBooking(b._id)}
                    className={`px-4 py-1 text-xs sm:text-sm text-white transition ${
                      b.ConfirmationStatus === "Confirmed"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                    disabled={b.ConfirmationStatus === "Confirmed"}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBookingsTable;
