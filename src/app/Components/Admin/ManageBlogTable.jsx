"use client"
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ManageBlogModal from "./ManageBlogModal";

const blogData = [
  {
    _id: 1,
    CardTitle: "Finding Your Dream Rental",
    CardDes: "Knowing your needs, preferences, and budget makes rental hunting easier.",
    DetailTitle: "A Comprehensive Guide to Finding Your Dream Rental Home Easily",
    DetailDes1: "Searching for a rental home can be daunting. This guide simplifies the steps you need to take.",
    DetailTitle1_1: "Key Tips for Rental Success",
    DetailDes2: "Always inspect the property thoroughly and understand lease terms before signing.",
    DetailDes2_1: "Communicate clearly with landlords and keep all agreements in writing.",
    Date: "2025-10-05",
    Location: "USA",
    image: "https://images.unsplash.com/photo-1580582934489-82a0c1d98aa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    _id: 2,
    CardTitle: "Smart Budgeting for Rentals",
    CardDes: "Plan your finances wisely to avoid rental stress and surprises.",
    DetailTitle: "Mastering Budgeting Techniques for Renting Homes",
    DetailDes1: "Budgeting is the cornerstone of finding a rental that suits your lifestyle and income.",
    DetailTitle1_1: "Creating a Rental Budget",
    DetailDes2: "Include rent, utilities, deposits, and unexpected expenses in your calculations.",
    DetailDes2_1: "Track your spending monthly to stay on top of your rental budget.",
    Date: "2025-11-12",
    Location: "Canada",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    _id: 3,
    CardTitle: "Neighborhood Insights",
    CardDes: "Choosing the right neighborhood affects your quality of life and convenience.",
    DetailTitle: "How to Choose the Perfect Neighborhood for Your Rental",
    DetailDes1: "Explore local amenities, commute options, safety, and community vibe before deciding.",
    DetailTitle1_1: "Research Strategies",
    DetailDes2: "Visit the area at different times and ask residents for honest opinions.",
    DetailDes2_1: "Use online tools and forums to gather neighborhood data and reviews.",
    Date: "2025-09-20",
    Location: "UK",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    _id: 4,
    CardTitle: "Rental Agreement Essentials",
    CardDes: "Understanding your lease agreement protects you from future disputes.",
    DetailTitle: "What to Look for in a Rental Lease Agreement",
    DetailDes1: "Review terms related to rent, duration, maintenance, and penalties carefully.",
    DetailTitle1_1: "Lease Components",
    DetailDes2: "Clarify policies on pets, guests, subletting, and early termination.",
    DetailDes2_1: "Keep a signed copy of your lease and document all communications.",
    Date: "2025-08-15",
    Location: "Australia",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    _id: 5,
    CardTitle: "Moving Tips for Renters",
    CardDes: "Smooth moving plans can reduce stress and save time.",
    DetailTitle: "Essential Moving Tips for Your Next Rental",
    DetailDes1: "Organize, pack smartly, and plan your move with these easy-to-follow tips.",
    DetailTitle1_1: "Packing and Logistics",
    DetailDes2: "Label boxes clearly and prioritize essentials for quick unpacking.",
    DetailDes2_1: "Schedule utilities and change your address well before moving day.",
    Date: "2025-12-01",
    Location: "Germany",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    _id: 6,
    CardTitle: "Rental Maintenance Guide",
    CardDes: "Keeping your rental in good condition benefits you and your landlord.",
    DetailTitle: "How to Handle Maintenance Issues in Your Rental Home",
    DetailDes1: "Timely reporting and minor upkeep can prevent major repair costs.",
    DetailTitle1_1: "Communication and Documentation",
    DetailDes2: "Notify your landlord immediately of any issues and keep records.",
    DetailDes2_1: "Understand your responsibilities versus the landlord's obligations.",
    Date: "2025-10-22",
    Location: "Japan",
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];


const ManageBlogTable = () => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };
  const tdStyle= "p-3 border text-nowrap"
  return (
    <div className="px-4 py-6">
      <div className="overflow-x-auto">
        <table className="table-auto w-auto lg:min-w-[1280px] mx-auto border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">TITLE</th>
              <th className="p-3 border">DATE</th>
              <th className="p-3 border">LOCATION</th>
              <th className="p-3 border">IMAGE</th>
              <th className="p-3 border">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className={`${tdStyle}`}>{blog._id}</td>
                <td className={`${tdStyle}`}>{blog.CardTitle}</td>
                <td className={`${tdStyle}`}>{blog.Date}</td>
                <td className={`${tdStyle}`}>{blog.Location}</td>
                <td className={`${tdStyle} overflow-hidden `}>
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-[50px] object-cover mx-auto"
                  />
                </td>
                <td className="p-3 border text-center relative">
                  <button
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                    onClick={() => toggleMenu(blog._id)}
                  >
                    <BsThreeDotsVertical className="text-xl" />
                  </button>

                  {openMenuId === blog._id && (
                    <ManageBlogModal BlogId={blog._id} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogTable;
