import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MyBookings = () => {
  const bookingDetails = [
    {
      title: "Mountain Retreat Cabin",
      description: "Cozy mountain cabin with stunning landscape views and secluded serenity.",
      location: "Aspen, CO",
      status: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 180,
      category: "Cabin",
    },
    {
      title: "Beachfront Villa",
      description: "Luxurious villa with ocean views and private beach access.",
      location: "Malibu, CA",
      status: "Sold",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 350,
      category: "Villa",
    },
    {
      title: "City Loft",
      description: "Modern city loft with skyline views and close to downtown.",
      location: "New York, NY",
      status: "For Sale",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 120,
      category: "Loft",
    },
    {
      title: "Countryside Cottage",
      description: "Charming cottage surrounded by nature with peaceful surroundings.",
      location: "Kent, UK",
      status: "For Rent",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 90,
      category: "Cottage",
    },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">My Bookings</h2>
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Property</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Location</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Status</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Bedrooms</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Bathrooms</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Square Feet</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white dark:bg-gray-900">
            {bookingDetails.map((booking, index) => (
              <TableRow key={index} className="border-b border-gray-200 dark:border-gray-700">
                <TableCell className="border-r border-gray-200 font-medium text-gray-800 dark:text-gray-100 dark:border-gray-700">{booking.title.slice(0,14)}</TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">{booking.location}</TableCell>
                <TableCell className="text-center border-r border-gray-200 dark:border-gray-700">
                  <span
                    className={`px-2 py-1 text-xs font-medium ${booking.status === "For Sale" ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100" : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100"}`}
                  >
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700">{booking.bedrooms}</TableCell>
                <TableCell className="text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700">{booking.bathrooms}</TableCell>
                <TableCell className="text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700">{booking.sqft} sqft</TableCell>
                <TableCell className="text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700">{booking.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyBookings;
