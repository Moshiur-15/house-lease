import GetPropertiesData from "@/app/Components/seller/GetData";
import ManagePropertieTable from "@/app/Components/seller/ManagePropertieTable";
import React from "react";

const ManagePropertie = async () => {
  const PropertiesData = await GetPropertiesData();

  return (
    <section className="my-5 lg:my-10">
      <div className="flex justify-between mb-4 items-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE YOU PROPERTIES
        </h2>
        <input
          type="text"
          placeholder="Search Properties..."
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
        />
      </div>
      <ManagePropertieTable properties={PropertiesData} />
    </section>
  );
};

export default ManagePropertie;
