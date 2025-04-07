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

        <img
          src={image}
          alt={CardTitle}
          className="w-full h-auto mb-6 object-cover"
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{DetailTitle}</h2>
        <p className="text-gray-800 mb-4">{DetailDes1}</p>
        <p className="text-gray-800">{DetailDes2}</p>
      </section>

      {/* comment */}
      <>
        <div className="mt-6px-6 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Leave a Reply</h2>
          <p className="text-gray-700 mb-4"> Your email address will not be published.</p>
          <form>
            <textarea
              placeholder="Your Message"
              className="p-3 border  w-full mt-4 h-32 focus:outline-none focus:ring-0"
            ></textarea>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-black text-white py-2 px-6 hover:bg-gray-300 font-bold hover:text-black transition duration-500"
            >
              Send Comment
            </button>
          </form>
        </div>
      </>
    </>
  );
};

export default BlogDetails;
