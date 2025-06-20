import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-96 sm:h-[410px] lg:h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/07gvvtg/wp4012682.jpg)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center p-5 max-w-4xl mx-auto">
        <h1 className="text-2xl dark:text-white md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
          Buy, Sell & Rent Real Estate in Portland
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mb-2 md:mb-6 leading-relaxed dark:text-gray-300">
          Explore Portland's real estate opportunities and discover your next
          home in one of the Pacific Northwest's most dynamic cities.
        </p>
        <Link href="/properties">
          <button className="bg-[#FF8904] px-3 py-1.5 md:px-5 md:py-2.5 hover:cursor-pointer hover:bg-[#FF8904]/90">
            Explore Properties
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
