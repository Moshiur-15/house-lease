import React from "react";

const ManageBookingsTable = () => {
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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>

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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>
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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>
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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>
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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>
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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>
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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>
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
                {/* <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-1 ml-3 text-xs sm:text-sm">
                  Cancel
                </button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookingsTable;
