import React from "react";
import Banner from "./Components/Banner";
import Services from "./Components/Home/Services";
import Exclusive from "./Components/Home/Exclusive";
import PopularAreasCard from "./Components/Home/PopularAreasCard";
import Category from "./Components/Home/Category";
import OurBlog from "./Components/Home/OurBlog";
import Rating from "./Components/Home/Rating";
const Home = () => {
  return (
    <div className="">
      <Banner />
      {/* services */}
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
    </div>
  );
};

export default Home;
