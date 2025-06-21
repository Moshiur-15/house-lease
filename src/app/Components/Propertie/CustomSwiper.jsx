"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import dynamic from "next/dynamic";

const CustomSwiper = ({ house, propertyId }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const { detImg1, detImg2, detImg3, detImg4 } = house || {};
  const images = { detImg1, detImg2, detImg3, detImg4 };
  const imageArray = images ? Object.values(images).filter(Boolean) : [];

  const handleBooking = async () => {
    try {
      if (!session?.user?.email) return toast("Please login!");
      if (session?.user?.role !== "buyer") return toast("You are not a buyer!");

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/buyer/booking`, {
        BuyerName: session?.user?.name,
        BuyerEmail: session?.user?.email,
        sellerEmail: house.sellerEmail,
        PropertyName: house.title,
        PropertyFees: house.price,
        PaymentStatus: "Unpaid",
        ConfirmationStatus: "pending",
        propertyId: propertyId,
      });

      toast("Booking successful");
      router.push("/dashboard/myBookings");
    } catch (err) {
      toast(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full">
      {/* Main Image Slider */}
      <Swiper
        modules={[Thumbs]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full overflow-hidden"
      >
        {imageArray.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        watchSlidesProgress
        freeMode
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mt-4 w-full"
      >
        {imageArray.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-[60px] sm:h-[80px] md:h-[100px] object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Description Section */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          {house.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {/* Left Side - Description */}
          <div className="col-span-2">
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {house.description}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <DetailItem label="Location" value={house.location} />
              <DetailItem label="Status" value={house.status} />
              <DetailItem label="Bedrooms" value={house.beds} />
              <DetailItem label="Bathrooms" value={house.baths} />
              <DetailItem label="Square Feet" value={house.sqft} />
              <DetailItem label="Category" value={house.category} />
            </div>
          </div>

          {/* Right Side - Pricing and Button */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 h-fit mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Pricing</h3>
            <p className="text-4xl font-bold mb-6 text-black dark:text-gray-200">
              ${house.price.toLocaleString()}
            </p>
            <button
              onClick={handleBooking}
              className="w-full cursor-pointer text-white py-3 bg-[#FF8904] hover:bg-[#e67e04] transition-colors font-semibold duration-500"
            >
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4">
    <p className="text-xs sm:text-sm text-gray-500 dark:text-white uppercase tracking-wide">
      {label}
    </p>
    <p className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-300 mt-1">
      {value}
    </p>
  </div>
);

export default dynamic(() => Promise.resolve(CustomSwiper), { ssr: false });
