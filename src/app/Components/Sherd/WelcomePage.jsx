import { useState, useEffect } from "react";
import { Moon, Sun, User, Shield, BarChart3, Settings } from "lucide-react";

export default function Dashboard({ session }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-500">

      <div className="bg-blue-50 dark:bg-slate-800 shadow-blue-200/50 dark:shadow-gray-900/50 rounded p-8 transition-all duration-500">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 space-y-3 sm:space-y-0 flex-col sm:flex-row">
            <img className="w-24 h-24" src={session?.user?.image} alt="img" />
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

    </div>
  );
}
