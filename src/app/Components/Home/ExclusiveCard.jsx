import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const ExclusiveCard = ({ property, view }) => {
  const { price, title, beds, sqft, baths, id, description, location } = property || {};
  return (
    <Link
      href={`/properties/${id}`}
      className={`${
        view === "list"
          ? "flex flex-col sm:flex-row gap-4"
          : "flex flex-col"
      } bg-white overflow-hidden transition-all duration-300`}
    >
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt={title}
        className={`${
          view === "list" ? "w-full sm:w-2/5 h-50 sm:h-[280px] lg:h-72" : "w-full h-52"
        } object-cover`}
      />

      {/* Details */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <p className="text-gray-700 flex items-center text-sm">
            <IoLocationOutline className="text-xl relative pr-1" />
            {location}
          </p>
          <h3 className={`${view === 'list' ? 'text-[18px] font-bold text-gray-800 mt-1':'xl:text-[18px] font-bold text-gray-800 mt-1'}`}>{title}</h3>

          <div className="flex flex-wrap gap-4 text-gray-600 mt-0.5 text-sm">
            <span>{beds} Bedrooms</span>
            <span>{baths} Baths</span>
            <span>{sqft} ft²</span>
          </div>
          {view === "list" && <p className="text-sm lg:text-lg text-gray-700 mt-">{description.slice(0, 130)}</p>}
        </div>

        <div className="mt-4 border-t border-gray-400 pt-2 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">${price}</div>
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Agent"
            className="w-10 h-10 object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default ExclusiveCard;
