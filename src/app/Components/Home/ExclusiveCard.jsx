"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ExclusiveCard = ({ property, view }) => {
  const {
    price,
    title,
    beds,
    sqft,
    baths,
    id,
    description,
    location,
    cardImage,
  } = property || {};
  const [liked, setLiked] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };

  return (
    <Link
      href={`/properties/${id}`}
      className={`${
        view === "list" ? "flex flex-col sm:flex-row gap-4" : "flex flex-col"
      } bg-white overflow-hidden transition-all duration-300`}
    >
      {/*Wishlist Button */}
      <div
        className={`relative ${
          view === "list"
            ? "sm:w-2/5 w-full aspect-[5/3] overflow-hidden"
            : "w-full aspect-[4/3] overflow-hidden"
        }`}
      >
        <img
          src={cardImage}
          alt={title}
          className={`w-full h-full object-cover`}
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition z-10"
        >
          {liked ? (
            <AiFillHeart className="text-red-500 w-5 h-5" />
          ) : (
            <AiOutlineHeart className="text-gray-600 w-5 h-5" />
          )}
        </button>
      </div>

      {/* Details */}
      <div className="px-3 py-5 flex flex-col justify-between flex-1">
        <div>
          <p className="text-gray-700 flex items-center text-sm">
            <IoLocationOutline className="text-xl relative" />
            {location}
          </p>
          <h3
            className={`${
              view === "list"
                ? "text-[18px] font-bold text-gray-800 mt-1"
                : "xl:text-[18px] font-bold text-gray-800 mt-1 ml-1"
            }`}
          >
            {title}
          </h3>

          <div className="flex flex-wrap gap-4 text-gray-600 mt-0.5 text-sm ml-1">
            <span>{beds} Bedrooms</span>
            <span>{baths} Baths</span>
            <span>{sqft} ft²</span>
          </div>
          {view === "list" && (
            <p className="text-sm lg:text-lg text-gray-700 mt-2">
              {description.slice(0, 130)}
            </p>
          )}
        </div>

        <div className="mt-4 border-t border-gray-400 pt-2 flex items-center justify-between ml-1">
          <div className="font-bold text-gray-900">
            $<span className="text-xl">{price}</span>
          </div>
          <img
            src="https://i.ibb.co.com/wNPyX4j/me.jpg"
            alt="Agent"
            className="w-10 h-10 object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default ExclusiveCard;
