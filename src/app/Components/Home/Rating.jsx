"use client";
import React, { use, useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

export default function TestimonialSection() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const getFeedback = async () => {
      const response = await axios.get("/api/buyer/rating");
      const feedback = response.data.data;
      console.log("Feedback:", feedback);
      setFeedbacks(feedback);
    };
    getFeedback();
  }, []);

  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      strength={300}
      className="h-[500px] lg:h-[700px] flex items-center justify-center"
    >
      <div className="max-w-5xl px-[310px] sm:px-[150px] lg:px-14 xl:px-0">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {feedbacks?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <div className="bg-black bg-opacity-80 text-white px-8 py-20 rounded-bl-[45px] rounded-tr-[45px] text-center shadow-lg">
                    <span className="text-orange-400 text-sm uppercase font-semibold">
                      Excellent Service
                    </span>
                    <p className="text-lg md:text-2xl mt-4 italic">
                      "{testimonial.comment.slice(0, 160)}..."
                    </p>
                    <div className="flex justify-center mt-4 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="mt-4 font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-6 z-50">
            <button className="prev bg-white p-3 rounded-full shadow-lg">
              <FaChevronLeft className="text-black" />
            </button>
            <button className="next bg-white p-3 rounded-full shadow-lg">
              <FaChevronRight className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
