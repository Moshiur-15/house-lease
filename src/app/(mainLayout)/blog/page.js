"use client"
import BlogCard from "@/app/Components/Home/BlogCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogPost, setBlogPost] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       const data = await res.json();
  //       setBlogPost(data.slice(0, 6));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
      img: "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/10-4-1-1.webp",
    },
    {
      id: 3,
      title: "Budgeting for Rent",
      description:
        "Tips on managing your finances to ensure you can comfortably afford your rental.",
      img: "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/2.6-6-1.webp",
    },
    {
      id: 4,
      title: "Tenant vs. Landlord Responsibilities",
      description:
        "Know what tasks fall under the tenant’s responsibility and what landlords must handle.",
      img: "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/hous224-4-1.webp",
    },
    {
      id: 5,
      title: "How to Get Your Security Deposit Back",
      description:
        "Steps to ensure you leave your rental in great condition and get your deposit returned.",
      img: "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/10-4-1-1.webp",
    },
  ];

  return (
    <>
      <div
        className="relative h-96 sm:h-[410px] lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center p-5">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Real Estate Blog
          </h1>
          <p className="text-lg lg:text-xl mb-6 leading-relaxed">
            Read about the latest industry news
          </p>
        </div>
      </div>

      <section className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold my-8">All Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blog.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
