import React, { useState } from 'react';
import { 
  Heart, 
  Search, 
  MapPin, 
  Calendar,
  DollarSign,
  Home,
  Filter,
  Bell,
  Bookmark,
  TrendingUp,
  Star,
  Eye
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

const searchActivityData = [
  { name: "Mon", searches: 12, views: 45 },
  { name: "Tue", searches: 8, views: 32 },
  { name: "Wed", searches: 15, views: 58 },
  { name: "Thu", searches: 6, views: 28 },
  { name: "Fri", searches: 18, views: 67 },
  { name: "Sat", searches: 22, views: 89 },
  { name: "Sun", searches: 19, views: 72 },
];

const priceRangeData = [
  { name: "Under $200K", value: 15, color: "#10B981" },
  { name: "$200K-$400K", value: 35, color: "#3B82F6" },
  { name: "$400K-$600K", value: 30, color: "#F59E0B" },
  { name: "$600K+", value: 20, color: "#EF4444" },
];

const marketTrendsData = [
  { name: "Jan", avgPrice: 320000, properties: 245 },
  { name: "Feb", avgPrice: 315000, properties: 267 },
  { name: "Mar", avgPrice: 330000, properties: 289 },
  { name: "Apr", avgPrice: 345000, properties: 312 },
  { name: "May", avgPrice: 358000, properties: 298 },
  { name: "Jun", avgPrice: 365000, properties: 324 },
];

const savedProperties = [
  { 
    id: 1, 
    title: "Modern Villa in Downtown", 
    location: "Downtown City", 
    price: "$450,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "🏠",
    saved: "2 days ago",
    status: "Available"
  },
  { 
    id: 2, 
    title: "Cozy Apartment with Garden", 
    location: "Green Valley", 
    price: "$280,000",
    bedrooms: 2,
    bathrooms: 1,
    image: "🏢",
    saved: "5 days ago",
    status: "Available"
  },
  { 
    id: 3, 
    title: "Family Home with Pool", 
    location: "Suburb Hills", 
    price: "$380,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "🏡",
    saved: "1 week ago",
    status: "Pending"
  },
];

const recentlyViewed = [
  { id: 1, title: "Luxury Penthouse Suite", price: "$720,000", location: "City Center", viewed: "1 hour ago" },
  { id: 2, title: "Charming Cottage", price: "$195,000", location: "Countryside", viewed: "3 hours ago" },
  { id: 3, title: "Modern Condo", price: "$340,000", location: "Tech District", viewed: "Yesterday" },
  { id: 4, title: "Waterfront Villa", price: "$890,000", location: "Lakeside", viewed: "2 days ago" },
];

const BuyerDashboard = () => {

  // Sample buyer stats
  const stats = {
    savedProperties: 12,
    viewedProperties: 89,
    scheduledTours: 3,
    activeAlerts: 8,
    avgSearchesPerWeek: 15,
    favoriteLocations: ["Downtown", "Green Valley", "Tech District"],
    budgetRange: "$300K - $500K"
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white text-gray-900 p-6">
      <div className="mx-auto">

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Calendar className="w-4 h-4" />
              Schedule Tour
            </button>
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Heart className="w-4 h-4" />
              Saved Properties ({stats.savedProperties})
            </button>
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Bell className="w-4 h-4" />
              Price Alerts ({stats.activeAlerts})
            </button>
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </button>
          </div>
        </div>

        {/* Main Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Saved Properties */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +3
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stats.savedProperties}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Saved Properties</div>
            <div className="mt-2 text-xs text-gray-400">
              Available: 10 • Pending: 2
            </div>
          </div>

          {/* Viewed Properties */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +15
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stats.viewedProperties}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Viewed Properties</div>
            <div className="mt-2 text-xs text-gray-400">
              This week: 23 properties
            </div>
          </div>

          {/* Scheduled Tours */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex items-center text-yellow-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                Soon
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stats.scheduledTours}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Scheduled Tours</div>
            <div className="mt-2 text-xs text-gray-400">
              Next: Tomorrow 2:00 PM
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Bell className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="flex items-center text-blue-500 text-sm">
                <Bell className="w-4 h-4 mr-1" />
                Active
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stats.activeAlerts}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">Price Alerts</div>
            <div className="mt-2 text-xs text-gray-400">
              Budget: {stats.budgetRange}
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Search Activity Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Search Activity</h3>
              <p className="text-gray-400 text-sm">Your property searches and views over the last 7 days</p>
              <div className="mt-4 text-sm text-gray-500">
                Average {stats.avgSearchesPerWeek} searches per week
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={searchActivityData}>
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
                    dataKey="searches"
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
                <span>Searches</span>
              </div>
            </div>
          </div>

          {/* Price Range Interest */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Price Range Interest</h3>
              <p className="text-gray-400 text-sm">Your search preferences</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={priceRangeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {priceRangeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl font-bold">100%</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {priceRangeData.map((item, index) => (
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
        </div>

        {/* Market Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">Market Trends</h3>
            <p className="text-gray-400 text-sm">Average property prices in your interested areas</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketTrendsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" tickFormatter={(value) => `$${value/1000}K`} />
                <Line
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  dot={{ fill: '#F59E0B', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Property Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Saved Properties */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Saved Properties</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm">View All</button>
            </div>
            <div className="space-y-4">
              {savedProperties.map((property) => (
                <div key={property.id} className="flex items-start space-x-4 p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="text-2xl">{property.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{property.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {property.location}
                        </p>
                        <div className="flex items-center space-x-3 text-xs text-gray-400">
                          <span>{property.bedrooms} bed</span>
                          <span>{property.bathrooms} bath</span>
                          <span className={`px-2 py-1 rounded-full ${property.status === 'Available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'}`}>
                            {property.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{property.price}</div>
                        <div className="text-xs text-gray-400">Saved {property.saved}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Recently Viewed</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm">Clear History</button>
            </div>
            <div className="space-y-4">
              {recentlyViewed.map((property) => (
                <div key={property.id} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div>
                    <h4 className="font-medium text-sm mb-1">{property.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {property.location}
                    </p>
                    <p className="text-xs text-gray-400">Viewed {property.viewed}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">{property.price}</div>
                    <button className="text-xs text-blue-600 hover:text-blue-800">View Again</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;