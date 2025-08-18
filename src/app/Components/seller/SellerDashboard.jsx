import React, { useState } from 'react';
import { 
  TrendingUp, 
  Home, 
  Eye, 
  MessageSquare, 
  DollarSign,
  Calendar,
  MapPin,
  Users,
  Star,
  Plus
} from "lucide-react";
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

const propertyViewsData = [
  { name: "Mon", views: 125, inquiries: 12 },
  { name: "Tue", views: 89, inquiries: 8 },
  { name: "Wed", views: 134, inquiries: 15 },
  { name: "Thu", views: 78, inquiries: 6 },
  { name: "Fri", views: 156, inquiries: 18 },
  { name: "Sat", views: 189, inquiries: 22 },
  { name: "Sun", views: 167, inquiries: 19 },
];

const monthlyEarningsData = [
  { name: "Jan", earnings: 15000, commissions: 1200 },
  { name: "Feb", earnings: 18000, commissions: 1440 },
  { name: "Mar", earnings: 22000, commissions: 1760 },
  { name: "Apr", earnings: 19000, commissions: 1520 },
  { name: "May", earnings: 25000, commissions: 2000 },
  { name: "Jun", earnings: 28000, commissions: 2240 },
];

const propertyStatusData = [
  { name: "For Sale", value: 45, color: "#3B82F6" },
  { name: "Sold", value: 30, color: "#10B981" },
  { name: "Pending", value: 15, color: "#F59E0B" },
  { name: "Draft", value: 10, color: "#6B7280" },
];

const topPropertiesData = [
  { id: 1, title: "Modern Villa in Downtown", views: 234, inquiries: 18, price: "$450,000" },
  { id: 2, title: "Cozy Apartment with Garden", views: 189, inquiries: 15, price: "$280,000" },
  { id: 3, title: "Luxury Penthouse Suite", views: 156, inquiries: 12, price: "$720,000" },
  { id: 4, title: "Family Home with Pool", views: 134, inquiries: 10, price: "$380,000" },
];

const SellerDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  // Sample seller stats
  const stats = {
    totalProperties: 24,
    totalViews: 1438,
    totalInquiries: 87,
    totalEarnings: 28000,
    activeListing: 18,
    soldProperties: 6,
    avgRating: 4.8,
    responseRate: 95
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white text-gray-900 p-6">
      <div className="mx-auto">

        {/* Main Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Properties */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Home className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12%
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stats.totalProperties}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Total Properties</div>
            <div className="mt-2 text-xs text-gray-400">
              Active: {stats.activeListing} • Sold: {stats.soldProperties}
            </div>
          </div>

          {/* Total Views */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +24%
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stats.totalViews.toLocaleString()}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Total Views</div>
            <div className="mt-2 text-xs text-gray-400">
              This week: 342 views
            </div>
          </div>

          {/* Inquiries */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <MessageSquare className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8%
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stats.totalInquiries}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Total Inquiries</div>
            <div className="mt-2 text-xs text-gray-400">
              Response rate: {stats.responseRate}%
            </div>
          </div>

          {/* Total Earnings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +18%
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">${stats.totalEarnings.toLocaleString()}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Total Earnings</div>
            <div className="mt-2 text-xs text-gray-400">
              This month: $5,200
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">{stats.avgRating}</div>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(stats.avgRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Average Rating</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">68</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Days Average Sale</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">${(stats.totalEarnings / stats.totalProperties).toFixed(0)}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Avg. Price per Property</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">156</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Customers</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Property Views & Inquiries Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Property Performance</h3>
              <p className="text-gray-400 text-sm">Views and inquiries over the last 7 days</p>
              <select 
                className="mt-4 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded px-3 py-2 text-sm"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={propertyViewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stackId="1"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="inquiries"
                    stackId="2"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Property Views</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Inquiries</span>
              </div>
            </div>
          </div>

          {/* Right Side Charts */}
          <div className="space-y-6">
            {/* Property Status */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Property Status</h3>
                <p className="text-gray-400 text-sm">Distribution by status</p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={propertyStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        dataKey="value"
                      >
                        {propertyStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xl font-bold">{stats.totalProperties}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {propertyStatusData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm dark:text-gray-300 text-gray-800">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Earnings */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Monthly Earnings</h3>
                <p className="text-gray-400 text-sm">Revenue trend</p>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyEarningsData}>
                    <Line
                      type="monotone"
                      dataKey="earnings"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: '#10B981', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Properties */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">Top Performing Properties</h3>
            <p className="text-gray-400 text-sm">Properties with highest engagement</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Property</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Views</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Inquiries</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Price</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {topPropertiesData.map((property) => (
                  <tr key={property.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-4 px-4">
                      <div className="font-medium">{property.title}</div>
                    </td>
                    <td className="py-4 px-4">{property.views}</td>
                    <td className="py-4 px-4">{property.inquiries}</td>
                    <td className="py-4 px-4 font-semibold">{property.price}</td>
                    <td className="py-4 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;