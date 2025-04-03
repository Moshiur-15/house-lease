import React from "react";
import Title from "../Sherd/Title";
import Image from "next/image";

const OurBlog = () => {
  const blog = [
    {
      id: 1,
      title: "Finding Your Dream Rental",
      description:
        "Explore the key factors to consider when searching for the perfect rental home.",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Understanding Rental Agreements",
      description:
        "A guide to understanding lease terms, security deposits, and tenant rights.",
      img: "https://images.unsplash.com/photo-1595526114035-0c717acc70ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Budgeting for Rent",
      description:
        "Tips on managing your finances to ensure you can comfortably afford your rental.",
      img: "https://images.unsplash.com/photo-1592595896613-b54a63f779d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Tenant vs. Landlord Responsibilities",
      description:
        "Know what tasks fall under the tenant’s responsibility and what landlords must handle.",
      img: "https://images.unsplash.com/photo-1564013799931-1a9c3c6e163a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "How to Get Your Security Deposit Back",
      description:
        "Steps to ensure you leave your rental in great condition and get your deposit returned.",
      img: "https://images.unsplash.com/photo-1580595029733-2f994b39b4f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
            <div className="flex flex-col grow px-4 py-6">
              <h2 className="text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block text-orange-400 font-semibold  mt-auto "
                >
                  Continue reading →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
