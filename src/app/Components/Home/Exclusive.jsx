import React from "react";
import Title from "../Sherd/Title";
import Image from "next/image";
import ExclusiveCard from "./ExclusiveCard";

const Exclusive = () => {
  const properties = [
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 2,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 4,
      sqft: 250,
      price: "$5,500,000",
    },
    {
      title: "Villa With Panoramic View",
      beds: 5,
      baths: 5,
      sqft: 250,
      price: "$5,500,000",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24">
      <div className="flex flex-col space-y-1 text-center">
        <span className="text-xs font-semibold tracking-widest flex justify-center items-center gap-1 text-orange-500 uppercase">
          <div className="h-2.5 w-2.5 rounded-full bg-[#EA703B]"></div>Exclusive
        </span>
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Properties
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {properties?.slice(0, 6).map((property) => <ExclusiveCard property={property} key={property?.baths} />)}
      </div>
    </div>
  );
};

export default Exclusive;
