"use client";
import axios from "axios";
import { Section } from "lucide-react";
import { toast } from "sonner";

const ManageBookingsTable = ({ bookings, loading, setBookings, onDelete }) => {
  // confirmation update handler
  const handleConfirmationChange = async (id, newStatus) => {
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/ConfirmationStatus/${id}`,
        { newStatus }
      );

      if (res.data.success) {
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

  return (
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
          <>
            {loading ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-5 text-gray-500 dark:text-gray-400"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              <>
                {bookings.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-5 text-gray-500 dark:text-gray-400"
                    >
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((b) => (
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
                          disabled={b.PaymentStatus === "Paid"}
                          className="px-3 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-100 focus:outline-none"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                        </select>
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        <button
                          onClick={() => onDelete(b._id)}
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
                  ))
                )}
              </>
            )}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookingsTable;
