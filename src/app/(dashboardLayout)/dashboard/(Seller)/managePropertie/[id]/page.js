// app/seller/[id]/page.jsx
import GetSingleData from "@/app/Components/seller/GetSingleData";
import PropertyUpdateModal from "@/app/Components/seller/PropertyUpdateModal";
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;
  const SingleData = await GetSingleData(id);

  if (!SingleData) {
    return <div className="text-center text-red-500 p-10">Data not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-6">
      <PropertyUpdateModal key={SingleData._id} property={SingleData} />
    </div>
  );
};

export default Page;
