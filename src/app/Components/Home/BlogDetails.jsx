'use client'
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaComments } from "react-icons/fa";

const BlogDetails = ({ detail, blogId }) => {
  const {
    CardTitle,
    DetailTitle,
    CardDes,
    DetailDes1,
    DetailDes2,
    DetailTitle1_1,
    DetailDes2_1,
    cardImage,
    detImg1,
    Date,
    Location,
  } = detail || {};

  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    if (!blogId) return;

    const getComment = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/comment?blogId=${blogId}`
        );
        if (res.data.success && Array.isArray(res.data.data)) {
          setCommentsCount(res.data.data.length);
        } else {
          setCommentsCount(0);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        setCommentsCount(0);
      }
    };

    getComment();
  }, [blogId]);

  return (
    <>
      {/* des details */}
      <section className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{CardTitle}</h2>

        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4 flex-wrap">
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
            {commentsCount} Comment{commentsCount !== 1 ? "s" : ""}
          </span>
        </div>

        <p className="text-gray-700 mb-4 dark:text-gray-300">{CardDes}</p>

        <Image
          src={cardImage || "/default-image.jpg"}
          alt={CardTitle}
          className="w-full h-auto mb-6 object-cover bg-gray-200"
          height={400}
          width={800}
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{DetailTitle}</h2>
        <p className="text-gray-800 mb-4 dark:text-gray-300">{DetailDes1}</p>
        <p className="text-gray-800 dark:text-gray-300">{DetailDes2}</p>

        <Image
          src={detImg1 || "/default-image.jpg"}
          alt={CardTitle}
          className="w-full h-auto mb-6 object-cover bg-gray-200 mt-8 lg:mt-14"
          height={400}
          width={800}
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-gray-300">{DetailTitle1_1}</h2>
        <p className="text-gray-800 mb-4 dark:text-gray-300">{DetailDes2_1}</p>
      </section>
    </>
  );
};

export default BlogDetails;
