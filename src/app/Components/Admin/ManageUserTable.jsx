"use client";
import { FaTrash } from "react-icons/fa";

const ManageUserTable = ({ User }) => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="">
              {["Name", "Role", "Email", "Action"].map((head, key) => (
                <th
                  key={key}
                  className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200">
              <td className="py-3 px-4">Moshiur</td>
              <td className="py-3 px-4">
                <select
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-white rounded-full px-4 outline-none cursor-pointer text-sm"
                  defaultValue="Admin"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </td>

              <td className="py-3 px-4">admin@gmail.com</td>
              <td className="py-3">
                <button className="flex items-center gap-2 px-4 py-0 text-sm hover:bg-red-200 cursor-pointer bg-red-100 text-red-800 dark:bg-red-800 dark:text-white rounded-full">
                  Delete
                </button>
              </td>
            </tr>

             <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200">
              <td className="py-3 px-4">Moshiur</td>
              <td className="py-3 px-4">
                <select
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-white rounded-full px-4 outline-none cursor-pointer text-sm"
                  defaultValue="Admin"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </td>

              <td className="py-3 px-4">admin@gmail.com</td>
              <td className="py-3">
                <button className="flex items-center gap-2 px-4 py-0 text-sm hover:bg-red-200 cursor-pointer bg-red-100 text-red-800 dark:bg-red-800 dark:text-white rounded-full">
                  Delete
                </button>
              </td>
            </tr>

             <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200">
              <td className="py-3 px-4">Moshiur</td>
              <td className="py-3 px-4">
                <select
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-white rounded-full px-4 outline-none cursor-pointer text-sm"
                  defaultValue="Admin"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </td>

              <td className="py-3 px-4">admin@gmail.com</td>
              <td className="py-3">
                <button className="flex items-center gap-2 px-4 py-0 text-sm hover:bg-red-200 cursor-pointer bg-red-100 text-red-800 dark:bg-red-800 dark:text-white rounded-full">
                  Delete
                </button>
              </td>
            </tr>


             <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200">
              <td className="py-3 px-4">Moshiur</td>
              <td className="py-3 px-4">
                <select
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-white rounded-full px-4 outline-none cursor-pointer text-sm"
                  defaultValue="Admin"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </td>

              <td className="py-3 px-4">admin@gmail.com</td>
              <td className="py-3">
                <button className="flex items-center gap-2 px-4 py-0 text-sm hover:bg-red-200 cursor-pointer bg-red-100 text-red-800 dark:bg-red-800 dark:text-white rounded-full">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserTable;
