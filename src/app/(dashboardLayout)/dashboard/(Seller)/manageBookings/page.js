import ManageBookingsTable from "@/app/Components/seller/ManageBookingsTable";
import React from "react";

const ManageBookings = () => {
  return (
    <section className="my-5 lg:my-10">
      <div className="flex flex-col lg:flex-row justify-between space-y-3 mb-6 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE YOU BOOKINGS
        </h2>
        <input
          type="text"
          placeholder="Search Bookings..."
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
        />
      </div>

      {/* table */}
      <ManageBookingsTable />
    </section>
  );
};

export default ManageBookings;
