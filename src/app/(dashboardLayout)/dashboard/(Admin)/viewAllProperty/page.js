"use client";

import { useEffect, useState } from "react";
import { viewAllProperty } from "@/app/Components/Admin/viewAllProperty";
import ViewProperty from "@/app/Components/Admin/ViewProperty";

const ViewAllProperty = () => {
  const [search, setSearch] = useState("");
  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await viewAllProperty(search);
      setPropertiesData(data);
    };
    fetchData();
  }, [search]);

  return (
    <section className="my-5 lg:my-10 px-4 xl:px-0 space-y-3">
      <div className="flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE PROPERTIES
        </h2>
        <input
          type="text"
          placeholder="Search Properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 focus:outline-0 dark:border-gray-600 w-full max-w-[16rem] py-2 px-3"
        />
      </div>
      <ViewProperty properties={propertiesData} />
    </section>
  );
};
export default ViewAllProperty;
