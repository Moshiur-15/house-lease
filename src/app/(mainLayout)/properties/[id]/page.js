import { viewAllProperty } from "@/app/Components/Admin/viewAllProperty";
import Comment from "@/app/Components/Propertie/Comment";
import CustomSwiper from "@/app/Components/Propertie/CustomSwiper";
import SideBer from "@/app/Components/Propertie/SideBer";
import GetSingleData from "@/app/Components/seller/GetSingleData";
import React from "react";

export default async function PropertiesDetails({ params }) {
  const { id } = await params;
  const house = await GetSingleData(id);
  if (!house) {
    return <div className="text-center text-red-500 p-10">Data not found</div>;
  }

  const recentPosts = await viewAllProperty();
  if (!recentPosts) {
    return <div className="text-center text-red-500 p-10">No recent posts found</div>;
  }

  return (
    <section>
      <div className="container mx-auto lg:flex gap-10 lg:gap-14 px-6.5 lg:px-5.5">
        {/* details data */}
        <section className="w-full lg:w-4/6 my-8">
          <CustomSwiper propertyId={id} house={house} />
          {/* comment */}
          <Comment propertyId={id} />
        </section>
        {/* sideber */}
        <aside className="w-full lg:w-2/6 h-fit top-12 sticky">
          <SideBer house={house} recentPosts={recentPosts} />
        </aside>
      </div>
    </section>
  );
}
