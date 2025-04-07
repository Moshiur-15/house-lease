import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";

const SideBer = () => {
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Facebook", icon: <FaFacebookF /> },
    { name: "LinkedIn", icon: <FaLinkedinIn /> },
    { name: "Pinterest", icon: <FaPinterest /> },
    { name: "Behance", icon: <FaBehance /> },
  ];

  const recentPosts = [
    {
      date: "13. MARCH 2023.",
      title: "Luxury Houses",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      date: "13. MARCH 2023.",
      title: "Great Guide",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      date: "13. MARCH 2023.",
      title: "House of the Week",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <aside className="py-8 space-y-10">
      {/* seller info */}
      <div className="p-6 bg-gray-100">
        {/* Agent Info */}
        <div className="flex items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Agent"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">Sam Daniels</h2>
            <p className="text-sm text-gray-500">SE DRE# 12567897</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          />
          <textarea
            placeholder="I'm interested in [ Townhouse For Sale ]"
            className="w-full border px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-0"
          ></textarea>
        </div>

        {/* Buttons */}
        <button className="w-full border bg-black py-2 mt-2 hover:border-black hover:bg-gray-100 text-white duration-500  hover:text-black border-transparent">
        📧 Send Email
        </button>
        
        <button className="group relative w-full border border-black overflow-hidden py-2 mt-2 transition-all duration-500 hover:border-transparent">
          <div className="absolute inset-0 w-0 bg-black transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center gap-2 text-black group-hover:text-white">
            👥 WhatsApp
          </span>
        </button>
      </div>

      {/* Recent Posts */}
      <div className="p-4 bg-gray-100">
        <h2 className="font-semibold text-lg mb-4">Recent Properties</h2>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index} className="flex items-center space-x-3">
              <img
                src={post.image}
                alt={post.title}
                className="w-[100px] h-[90px] lg:w-[75px] lg:h-[75px] object-cover rounded cursor-pointer"
              />
              <div>
                <p className="text-xs text-gray-600">{post.date}</p>
                <p className="text-sm font-medium">{post.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default SideBer;
