import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  const { cardImage, CardTitle, CardDes, _id } = blog || {};
  console.log(_id)

  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={cardImage}
          alt={CardTitle}
          className="object-cover object-center"
          loading="lazy"
          fill
        />
      </div>

      <div className="flex flex-col grow px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-800">{CardTitle}</h2>
        <p className="text-gray-600 text-sm mt-2">{CardDes}</p>
        <div className="mt-auto">
          <Link
            href={`/blog/${_id}`}
            className="mt-4 inline-block text-orange-400 font-semibold"
          >
            Continue reading →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
