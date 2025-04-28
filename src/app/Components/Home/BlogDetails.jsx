import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaComments } from "react-icons/fa";

const BlogDetails = ({ detail }) => {
  const {
    CardTitle,
    DetailTitle,
    CardDes,
    DetailDes1,
    DetailDes2,
    image,
    Date,
    Location,
  } = detail || {};

  return (
    <>
      {/* des details */}
      <section className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{CardTitle}</h2>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 flex-wrap">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-500" />
            {Location}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-green-500" />
            {Date}
          </span>
          <span className="flex items-center gap-1">
            <FaComments className="text-yellow-500" />
            10 Comments
          </span>
        </div>

        <p className="text-gray-700 mb-4">{CardDes}</p>

        <Image
          src={image}
          alt={CardTitle}
          className="w-full h-auto mb-6 object-cover bg-gray-200"
          height={70}
          width={100}
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{DetailTitle}</h2>
        <p className="text-gray-800 mb-4">{DetailDes1}</p>
        <p className="text-gray-800">{DetailDes2}</p>
      </section>
    </>
  );
};

export default BlogDetails;
