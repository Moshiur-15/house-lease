import CustomSwiper from "@/app/Components/Propertie/CustomSwiper";
import SideBer from "@/app/Components/Propertie/SideBer";
import React from "react";

export default async function PropertiesDetails({ params }) {
  const { id } = await params;
  console.log(id);
  return (
    <section>

      <div className="container mx-auto lg:flex gap-10 lg:gap-14 px-6.5 lg:px-5.5">
        {/* details data */}
        <section className="w-full lg:w-4/6 my-8">
           <CustomSwiper/>
        </section>
        {/* sideber */}
        <aside className="w-full lg:w-2/6 h-fit top-12 sticky">
        <SideBer/>
        </aside>
      </div>
    </section>
  );
}
