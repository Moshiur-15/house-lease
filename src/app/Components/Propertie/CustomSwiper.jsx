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

const CustomSwiper = ({ house, propertyId }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const { detImg1, detImg2, detImg3, detImg4 } = house || {};
  const images = { detImg1, detImg2, detImg3, detImg4 };
  const imageArray = images ? Object.values(images) : [];

  const handleBooking = async () => {
    try {
      if (!session?.user?.email) return toast("please login!");
      if (session?.user?.role !== "buyer") return toast("You are not a buyer!");

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/buyer/booking`, {
        BuyerName: session?.user?.name,
        BuyerEmail: session?.user?.email,
        sellerEmail:  house.sellerEmail,
        PropertyName: house.title,
        PropertyFees: house.price,
        PaymentStatus: "Unpaid",
        ConfirmationStatus: "pending",
        propertyId: propertyId,
      });
      console.log(res.data);
      toast("Booking successful");
      router.push('/dashboard/myBookings')
    } catch (err) {
      console.log(err);
      toast(`${err?.response?.data?.message}`)
    }
  };

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
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {house.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-2">
              <p className="text-xl text-gray-600 leading-relaxed">
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

            <div className="bg-gray-100/70 p-6 h-fit mt-8 md:mt-0">
              <h3 className="text-2xl font-bold mb-4">Pricing</h3>
              <p className="text-4xl font-bold mb-6">
                ${house.price.toLocaleString()}
              </p>
              <button
                onClick={handleBooking}
                className="w-full cursor-pointer text-white py-3 bg-[#FF8904] transition-colors font-semibold duration-500"
              >
                Booking
              </button>
              {/* <button className="group relative w-full border border-[#FF8904] overflow-hidden py-2 mt-2 transition-all duration-500 hover:border-transparent">
                <div className="absolute inset-0 w-0 bg-[#FF8904] transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 text-black group-hover:text-white  cursor-pointer">
                  Wishlist
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="bg-gray-100/70 p-4">
    <p className="text-sm text-gray-500 uppercase tracking-wide">{label}</p>
    <p className="text-lg font-semibold text-gray-800 mt-1">{value}</p>
  </div>
);

export default CustomSwiper;
