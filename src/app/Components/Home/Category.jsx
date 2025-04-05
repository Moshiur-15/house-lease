import React from "react";
import Title from "../Sherd/Title";

const Category = () => {
  const Categories = [
    {
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Apartments",
      listing: "24",
    },
    {
      img: "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/2.6-6-1.webp",
      title: "Luxury Villas",
      listing: "12",
    },
    {
      img: "https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/10-4-1-1.webp",
      title: "Single Family Homes",
      listing: "18",
    },
    {
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Commercial Spaces",
      listing: "30",
    },
    {
      img: "https://portland-residence.b-cdn.net/wp-content/uploads/2021/11/slider4-2-1-1.jpeg",
      title: "Studio Apartments",
      listing: "15",
    },
    {
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Resort Homes",
      listing: "8",
    },
    {
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      title: "Shared Housing",
      listing: "20",
    },
    {
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Penthouse",
      listing: "5",
    },
    {
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Townhouses",
      listing: "10",
    },
    {
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
            <div className="relative aspect-square border-2 border-gray-100 rounded-bl-[30px] rounded-tr-[30px] overflow-hidden shadow-lg">
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
              <h2 className="text-lg md:text-xl font-bold text-gray-800 truncate">
                {category.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
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