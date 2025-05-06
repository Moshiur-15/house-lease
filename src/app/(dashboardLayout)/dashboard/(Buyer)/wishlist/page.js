import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai"; // Importing icons

const wishlistData = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 3,
    sqft: 250,
    price: 5000,
    status: "For Sale",
    category: "Villa",
    cardImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Luxury Villa in Beverly Hills with modern amenities and scenic views.",
  },
  {
    id: 2,
    title: "Modern Apartment in NYC",
    location: "New York City, NY",
    beds: 2,
    baths: 2,
    sqft: 120,
    price: 3500,
    status: "Sold",
    category: "Apartment",
    cardImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "A sleek and stylish apartment in the heart of the city.",
  },
];

const Wishlist = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 uppercase text-gray-800 dark:text-gray-200">Wishlist</h2>
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Image</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Title</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Location</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Status</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white dark:bg-gray-900">
            {wishlistData.map((item) => (
              <TableRow
                key={item.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <TableCell className="border-r border-gray-200 dark:border-gray-700">
                  <img
                    src={item.cardImage}
                    alt={item.title}
                    className="w-16 h-12 object-cover shadow-sm"
                  />
                </TableCell>
                <TableCell className="font-medium text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700">{item.title}</TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">{item.location}</TableCell>
                <TableCell className="text-center border-r border-gray-200 dark:border-gray-700">
                  <span
                    className={`px-2 py-1 text-xs font-medium ${
                      item.status === "For Sale"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300 flex space-x-3 text-xl mt-1.5 mx-3">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500">
                    <AiOutlineEye className="inline-block" />
                  </button>
                  <button className="text-red-600 dark:text-red-400 hover:text-red-500">
                    <AiOutlineDelete className="inline-block" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Wishlist;
