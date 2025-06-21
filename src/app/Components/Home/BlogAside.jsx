import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";

const BlogAside = ({resentBlog}) => {
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Facebook", icon: <FaFacebookF /> },
    { name: "LinkedIn", icon: <FaLinkedinIn /> },
    { name: "Pinterest", icon: <FaPinterest /> },
    { name: "Behance", icon: <FaBehance /> },
  ];

  return (
    <aside className="py-8 space-y-10">
      {/* Recent Posts */}
      <div className="p-4 bg-gray-100 rounded shadow-sm dark:bg-gray-900">
        <h2 className="font-semibold text-lg mb-4">Recent posts</h2>
        <ul className="space-y-4">
          {resentBlog?.slice(0,4).map((post, index) => (
            <li key={index} className="flex items-center space-x-3">
              <img
                src={post.cardImage}
                alt={post.CardTitle}
                className="w-[100px] h-[90px] lg:w-[75px] lg:h-[75px] object-cover rounded cursor-pointer"
              />
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-300">{post.Date}</p>
                <p className="text-sm font-medium">{post.CardTitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Follow Us */}
      <div className="p-4 bg-gray-100 rounded dark:bg-gray-900 shadow-sm">
        <h2 className="font-semibold text-lg mb-3">Follow us</h2>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 hover:text-black dark:hover:text-gray-500 cursor-pointer"
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
