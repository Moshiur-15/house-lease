"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

const GallerySwiper = ({ house }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Convert the images object to an array
  const imageArray = house?.images ? Object.values(house.images) : [];

  return (
    <div className="">
      {/* Main Gallery */}
      <Swiper
        modules={[Thumbs]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-[500px] w-full overflow-hidden"
      >
        {imageArray.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="mt-4 h-[100px] w-full"
      >
        {imageArray.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Description Section */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold uppercase">{house.title}</h1>
        <p className="text-lg mt-2 opacity-80 uppercase">{house.description}</p>
      </div>
    </div>
  );
};

export default GallerySwiper;
