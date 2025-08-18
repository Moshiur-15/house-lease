"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboard from "../Admin/AdminDashboard";
import SellerDashboard from "../seller/SellerDashboard";
import BuyerDashboard from "../buyer/BuyerDashboard";

export default function Dashboard({ session }) {
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalProperties, setTotalProperties] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [blogsRes, propertiesRes, usersRes] = await Promise.all([
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/deshboardDataGet/totalBlogs`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/deshboardDataGet/totalPropertty`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/deshboardDataGet/totalUsers`
          ),
        ]);
        setTotalBlogs(blogsRes.data);
        setTotalProperties(propertiesRes.data);
        setTotalUsers(usersRes.data.userInfo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllData();
  }, []);
  console.log(session)

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-gray-900 p-4 transition-colors duration-500">
      <div className="bg-indigo-100/80 dark:bg-slate-800 shadow-blue-200/50 dark:shadow-gray-900/50 rounded p-8 transition-all duration-500">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 space-y-3 sm:space-y-0 flex-col sm:flex-row">
            <img className="w-24 h-24 bg-gray-50" src={session?.user?.image || "https://i.ibb.co/GfGymx0g/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png"} alt="img" />
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Welcome back, {session?.user?.name}!
              </h1>
              <p className="text-gray-700 dark:text-gray-200 text-lg opacity-90">
                {(session?.user?.role === "admin" &&
                  "Monitor platform performance and manage system operations") ||
                  (session?.user?.role === "seller" &&
                    "Manage your store and track product performance") ||
                  (session?.user?.role === "buyer" &&
                    "Explore the platform and enjoy seamless shopping")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base opacity-80 mt-2">
                {(session?.user?.role === "admin" &&
                  "You have full administrative access to manage users, oversee transactions, and maintain platform security.") ||
                  (session?.user?.role === "seller" &&
                    "You can add new products, update stock, and view your sales reports.") ||
                  (session?.user?.role === "buyer" &&
                    "Browse products, add items to your cart, and complete secure transactions easily.")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {session?.user?.role === "admin" && (
        <AdminDashboard
          totalProperties={totalProperties}
          totalBlogs={totalBlogs}
          totalUsers={totalUsers}
        />
      )}
      {session?.user?.role === "seller" && (
        <SellerDashboard />
      )}
      {session?.user?.role === "buyer" && (
        <BuyerDashboard />
      )}
    </div>
  );
}
