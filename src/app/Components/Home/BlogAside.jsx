import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";

const BlogAside = () => {
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
      {/* Recent Posts */}
      <div className="p-4 bg-gray-100 rounded shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Recent posts</h2>
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

      {/* Follow Us */}
      <div className="p-4 bg-gray-100 rounded shadow-sm">
        <h2 className="font-semibold text-lg mb-3">Follow us</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 hover:text-black cursor-pointer"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-lg ml-2">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogAside;
