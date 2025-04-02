import React from "react";
import Title from "../Sherd/Title";
import Image from "next/image";

const OurBlog = () => {
  const blog = [
    {
      id: 1,
      title: "HOME SEARCH",
      description:
        "Searching for a new home is an exciting journey for buyers and sellers.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "HOME VALUATION",
      description:
        "Accurate home valuation ensures fair pricing for sellers & appropriate offers for buyers.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "LET'S CONNECT",
      description:
        "Whether you're looking to buy, sell, or simply have questions about real estate.",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24">
      <Title h2="NEWS" p="Our Blog" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blog?.slice(0, 6).map((blog, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="px-3 py-6">
              <h2 className="text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-orange-400 font-semibold"
              >
                Continue reading →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
