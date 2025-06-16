"use client";

import { toast } from "sonner";
import handleRoleUpdate from "./handleRoleUpdate ";

const ManageUserTable = ({ UsersData }) => {
  const handleDelete = (id) => {
    console.log(id);
  };
  const handleUpdate = (id, role) => {
    console.log(id, role);
    // handleRoleUpdate(id, role);
    toast("UPDATED USER ROLE!")
  };
  return (
    <div className="p-4">
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="">
              {["Name", "Role", "Email", "Action"].map((head, key) => (
                <th
                  key={key}
                  className="py-3 pr-3 border-b text-center border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {UsersData?.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200 text-center"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">
                  <select
                    className={`${
                      user.role?.toLowerCase() === "admin"
                        ? "bg-green-50/50 border-green-100"
                        : "bg-green-100"
                    } text-green-800 dark:bg-green-800 dark:text-white rounded-full px-4 outline-none cursor-pointer text-sm`}
                    defaultValue={user.role?.toLowerCase()}
                    disabled={user.role.toLowerCase() === "admin"}
                    onChange={(e) => handleUpdate(user._id, e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </td>

                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 pr-4">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="flex items-center gap-2 px-4 py-0 text-sm hover:bg-red-200 cursor-pointer bg-red-100 text-red-800 dark:bg-red-800 dark:text-white rounded-full mx-auto"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserTable;
