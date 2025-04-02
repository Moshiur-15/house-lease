import React from 'react';

const Banner = () => {
  return (
    <div 
      className="relative h-96 sm:h-[410px] lg:h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center p-5 max-w-4xl mx-auto">
        <h1 className="sm:text-4xl lg:text-5xl font-bold mb-4">
          Buy, Sell & Rent Real Estate in Portland
        </h1>
        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          Explore Portland's real estate opportunities and discover your next home 
          in one of the Pacific Northwest's most dynamic cities.
        </p>
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 transition duration-300">
          Explore Properties
        </button>
      </div>
    </div>
  );
};

export default Banner;