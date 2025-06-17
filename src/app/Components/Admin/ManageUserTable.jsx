"use client";
import { toast } from "sonner";
import axios from "axios";

const ManageUserTable = ({ UsersData, setUsersData }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/user/${id}`
      );
      toast.success("User deleted successfully");
      setUsersData((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id, role) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/user/${id}`,
        { role }
      );
      toast.success("UPDATED USER ROLE!");
      setUsersData((prev) =>
        prev.map((user) => (user._id === id ? { ...user, role: role } : user))
      );
    } catch (err) {
      console.error(err);
      toast.error("Failed to update user role.");
    }
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
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
            {UsersData?.slice()
              .reverse()
              .map((user) => {
                const role = user.role ? user.role.toLowerCase() : "";
                return (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200 text-center"
                  >
                    <td className="py-3 px-4">{user.name || "No Name"}</td>
                    <td className="py-3 px-4">
                      <select
                        className={`${
                          role === "admin"
                            ? "bg-green-50/50 border-green-100"
                            : "bg-green-100"
                        } text-green-800 dark:bg-green-800 dark:text-white rounded-full px-4 outline-none cursor-pointer text-sm`}
                        value={role}
                        disabled={role === "admin"}
                        onChange={(e) => handleUpdate(user._id, e.target.value)}
                      >
                        <option value="admin">Admin</option>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                      </select>
                    </td>

                    <td className="py-3 px-4">{user.email || "No Email"}</td>
                    <td className="py-3 pr-4">
                      <button
                        onClick={() => handleDelete(user._id)}
                        disabled={role === "admin"}
                        className={`flex items-center gap-2 px-4 py-0 text-sm rounded-full text-white mx-auto ${
                          role === "admin"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserTable;
