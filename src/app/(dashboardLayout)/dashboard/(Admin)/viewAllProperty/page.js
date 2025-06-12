import ViewProperty from "@/app/Components/Admin/ViewProperty";
import GetPropertiesData from "@/app/Components/seller/GetData";
import React from "react";

const ViewAllProperty = async () => {
  const PropertiesData = await GetPropertiesData();

  return (
    <section className="my-5 lg:my-10 px-4 xl:px-0 space-y-3">
      <div className="flex flex-col lg:flex-row justify-between space-y-3">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE YOU PROPERTIES
        </h2>
        <input
          type="text"
          placeholder="Search Properties..."
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
        />
      </div>
      <ViewProperty properties={PropertiesData} />
    </section>
  );
};

export default ViewAllProperty;
