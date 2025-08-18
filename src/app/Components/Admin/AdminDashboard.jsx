import { useState, useEffect } from "react";
import { Moon, Sun, User, Shield, BarChart3, Settings } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
} from "lucide-react";
import TotalUser from "./TotalUser";
import TotalProperty from "./TotalProperty";

const totalRevenueData = [
  { name: "Jan", revenue: 45000, expenses: 38000 },
  { name: "Feb", revenue: 38000, expenses: 32000 },
  { name: "Mar", revenue: 52000, expenses: 45000 },
  { name: "Apr", revenue: 48000, expenses: 42000 },
  { name: "May", revenue: 61000, expenses: 52000 },
  { name: "Jun", revenue: 55000, expenses: 48000 },
  { name: "Jul", revenue: 68000, expenses: 58000 },
  { name: "Aug", revenue: 64000, expenses: 55000 },
  { name: "Sep", revenue: 59000, expenses: 51000 },
  { name: "Oct", revenue: 63000, expenses: 54000 },
  { name: "Nov", revenue: 58000, expenses: 50000 },
  { name: "Dec", revenue: 72000, expenses: 61000 },
];

const blogData = [
  { name: "01 May", value: 435 },
  { name: "02 May", value: 157 },
  { name: "03 May", value: 414 },
  { name: "04 May", value: 50 },
  { name: "05 May", value: 512 },
  { name: "06 May", value: 515 },
  { name: "07 May", value: 558 },
];

const propertyTypeData = [
  { name: "Apartments", value: 45, color: "#3B82F6" },
  { name: "Houses", value: 30, color: "#10B981" },
  { name: "Condos", value: 15, color: "#F59E0B" },
  { name: "Townhouses", value: 10, color: "#EF4444" },
];

const occupancyData = [
  { name: "Occupied", value: 78, color: "#10B981" },
  { name: "Vacant", value: 22, color: "#6B7280" },
];

const AdminDashboard = ({ totalProperties, totalUsers, totalBlogs }) => {
  const Available = totalProperties?.allProperty?.filter(p => p.status === "Rent")?.length || 0;
  const Occupied = totalProperties?.allProperty?.filter(p => p.status === "for sale")?.length || 0;
  return (
    <div>
      <div className="min-h-screen dark:text-white text-black p-6">
        <div className="mx-auto">
          {/* Main Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Total Properties */}
            <div className="dark:bg-gray-800 bg-[#FFFFFF] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Total Properties</h3>
                  <p className="text-gray-400 text-sm">Last 7 days</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">
                    {totalProperties?.totalProperty}
                  </div>
                  <div className="flex items-center text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +7.8%
                  </div>
                </div>
              </div>
              <div className="h-16">
                <TotalProperty
                  property={totalProperties?.allProperty}
                />
              </div>
              <div className="mt-3 flex justify-between text-xs text-gray-400">
                <span>Available: {Available}</span>
                <span>Occupied: {Occupied}</span>
              </div>
            </div>

            {/* Total Users */}
            <div className="dark:bg-gray-800 bg-[#FFFFFF] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Total Users</h3>
                  <p className="text-gray-400 text-sm">Last 7 days</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold"> {totalUsers?.totalUser}</div>
                  <div className="flex items-center text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +33.5%
                  </div>
                </div>
              </div>
              <div className="h-16">
                <TotalUser totalUsers={totalUsers} />
              </div>
              <div className="mt-3 flex justify-between text-xs text-gray-400">
                <span>Seller: {totalUsers?.allUsers?.filter(user => user.role === "seller").length || 0}</span>
                <span>Buyer: {totalUsers?.allUsers?.filter(user => user.role === "buyer").length || 0}</span>
              </div>
            </div>

            {/* Total Blogs */}
            <div className="dark:bg-gray-800 bg-[#FFFFFF] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Total Blogs</h3>
                  <p className="text-gray-400 text-sm">Last 7 days</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{totalBlogs?.totalBlogs}</div>
                  <div className="flex items-center text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12.1%
                  </div>
                </div>
              </div>
              <div className="h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={blogData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#F59E0B"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              {/* <div className="mt-3 flex justify-between text-xs text-gray-400">
                <span>Published: 52</span>
                <span>Draft: 6</span>
              </div> */}
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Revenue Overview</h3>
                <p className="text-gray-400 text-sm">
                  Monthly revenue and expenses comparison
                </p>
                <select className="mt-4 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded px-3 py-2 text-sm">
                  <option>Jan 1 - Dec 31, 2024</option>
                </select>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={totalRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stackId="2"
                      stroke="#EF4444"
                      fill="#EF4444"
                      fillOpacity={0.4}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Revenue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Expenses</span>
                </div>
              </div>
            </div>

            {/* Right Side Charts */}
            <div className="space-y-6">
              {/* Property Types */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">Property Types</h3>
                  <p className="dark:text-gray-400 text-gray-800 text-sm">Distribution by type</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={propertyTypeData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          dataKey="value"
                        >
                          {propertyTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xl font-bold">264</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {propertyTypeData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between "
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm dark:text-gray-300 text-gray-800">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Occupancy Rate */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">Occupancy Rate</h3>
                  <p className="text-gray-400 text-sm">
                    Current occupancy status
                  </p>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={occupancyData}
                          cx="50%"
                          cy="50%"
                          startAngle={90}
                          endAngle={450}
                          innerRadius={30}
                          outerRadius={45}
                          dataKey="value"
                        >
                          {occupancyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-lg font-bold">78%</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {occupancyData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm dark:text-gray-300 text-gray-800">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
