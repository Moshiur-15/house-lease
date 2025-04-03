import Banner from "@/app/Components/Banner";
import Category from "@/app/Components/Home/Category";
import Exclusive from "@/app/Components/Home/Exclusive";
import OurBlog from "@/app/Components/Home/OurBlog";
import Services from "@/app/Components/Home/Services";
import PopularAreasCard from "@/app/Components/Home/PopularAreasCard";
import Rating from "@/app/Components/Home/Rating";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto py-8 md:py-14 lg:py-20">
        <Services />
      </div>
      <div className="container mx-auto">
        <Exclusive />
      </div>
      <div className="py-8 md:py-14 lg:py-20">
        <PopularAreasCard />
      </div>
      <div className="container mx-auto">
        <Category />
      </div>
      <div className=" py-8 md:py-14 lg:py-20">
        <Rating />
      </div>
      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20">
        <OurBlog />
      </div>
    </>
  );
};

export default Home;
