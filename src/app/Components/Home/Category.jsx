import React from "react";
import Title from "../Sherd/Title";

const Category = () => {
  const Categories = [
    {
      img: "https://i.ibb.co/wh66CX0J/download-7-1.jpg",
      title: "Apartments",
      listing: "24",
    },
    {
      img: "https://i.ibb.co/xtrWvg8m/download-2.jpg",
      title: "Luxury Villas",
      listing: "12",
    },
    {
      img: "https://i.ibb.co/7NBq8SYY/download-1.jpg",
      title: "Single Family Homes",
      listing: "18",
    },
    {
      img: "https://i.ibb.co/xqKSYQ4B/download.jpg",
      title: "Commercial Spaces",
      listing: "30",
    },
    {
      img: "https://i.ibb.co/600Q0FWg/download-4.jpg",
      title: "Studio Apartments",
      listing: "15",
    },
    {
      img: "https://i.ibb.co/fd4mwWjq/download.jpg",
      title: "Resort Homes",
      listing: "8",
    },
    {
      img: "https://i.ibb.co/39X2b3Fy/images.jpg",
      title: "Shared Housing",
      listing: "20",
    },
    {
      img: "https://i.ibb.co/vCrKnV5R/download-9.jpg",
      title: "Penthouse",
      listing: "5",
    },
    {
      img: "https://i.ibb.co/XMpCCjn/download-8.jpg",
      title: "Townhouses",
      listing: "10",
    },
    {
      img: "https://i.ibb.co/XMpCCjn/download-8.jpg",
      title: "Land Plots",
      listing: "50",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24">
      <Title
        h2="CATEGORIES"
        p="Find your perfect fit in Portland real estate"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Categories?.slice(0, 10).map((category, index) => (
          <div
            key={index}
            className="group transform transition-all duration-300 hover:-translate-y-2"
          >
            {/* img */}
            <div className="relative aspect-square border-2 border-gray-100 dark:border-gray-600 rounded-bl-[30px] rounded-tr-[30px] overflow-hidden shadow-lg">
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* text */}
            <div className="px-2 py-4 md:px-3 md:py-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 truncate dark:text-white">
                {category.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2 dark:text-gray-300/90">
                {category.listing} listing
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
