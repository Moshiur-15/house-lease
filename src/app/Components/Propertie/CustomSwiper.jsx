"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

const images = [
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const GallerySwiper = () => {
  const thumbsSwiperRef = useRef(null);

  return (
    <div className="">
      <Swiper
        modules={[Thumbs]}
        spaceBetween={10}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        className="h-[500px] w-full overflow-hidden "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="mt-4 h-[100px] w-full"
      >
        {images.map((src, index) => (
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
        <h1 className="text-3xl font-bold">Kinsley is waiting for you!</h1>
        <p className="text-lg mt-2 opacity-80">
          Image for cattle earth. May one which life divide sea. Optio veniam
          quibusdam fugit aspernatur ratione rerum necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default GallerySwiper;
