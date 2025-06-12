import ManageUserTable from "@/app/Components/Admin/ManageUserTable";
import React from "react";

const AllUsers = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between space-y-3 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE USERS
        </h2>
        <input
          type="text"
          placeholder="Search Users..."
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
        />
      </div>
      <ManageUserTable />
    </div>
  );
};

export default AllUsers;
