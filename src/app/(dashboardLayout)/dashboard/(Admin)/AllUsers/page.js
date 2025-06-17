'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import ManageUserTable from "@/app/Components/Admin/ManageUserTable";

const UsersPage = ({ loggedInUserEmail }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/user?email=${loggedInUserEmail}`
        );
        if (res.data.success) {
          setUsersData(res.data.users);
        }
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    }
    fetchUsers();
  }, [loggedInUserEmail]);

  return <ManageUserTable UsersData={usersData} setUsersData={setUsersData} />;
};

export default UsersPage;
