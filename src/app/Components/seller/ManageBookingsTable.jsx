"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ManageBookingsTable = () => {
  const [bookings, setBookings] = useState([]);
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
  console.log(bookings);
  // const handleDelete = async (id) => {
  //   const confirm = window.confirm("Are you sure to delete this booking?");
  //   if (!confirm) return;

  //   try {
  //     await axios.delete(`/api/buyer/booking?id=${id}`);
  //     setBookings((prev) => prev.filter((b) => b._id !== id));
  //   } catch (err) {
  //     console.error(err);
  //     toast("Failed to delete");
  //   }
  // };

  return (
    <div>
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
            {/* main */}
            <tr className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-gray-100">
                Mountain Retreat Cabin
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-700 dark:text-gray-200">
                John Doe
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-700 dark:text-gray-200">
                $1200
              </td>
              <td className="px-4 py-3 whitespace-nowrap font-semibold text-green-600 dark:text-green-400">
                Paid
              </td>
              <td className="px-4 py-3 whitespace-nowrap font-semibold text-yellow-500 dark:text-yellow-400">
                Pending
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-1 text-xs sm:text-sm">
                  Confirm
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookingsTable;
