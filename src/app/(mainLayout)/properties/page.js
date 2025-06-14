"use client";

import FilterBar from "@/app/Components/Home/FilterBar";
import ExclusiveCard from "../../Components/Home/ExclusiveCard";
import { useEffect, useState } from "react";
import GetPropertiesData from "@/app/Components/seller/GetData";

const Properties = () => {
  const [view, setView] = useState("grid");
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    try {
      const data = await GetPropertiesData();
      setProperties(data);
      console.log("Inside fetch:", data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* banner */}
      <div
        className="relative h-96 sm:h-[410px] xl:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://portland-residence.b-cdn.net/wp-content/uploads/2014/05/2.6-6-1.webp)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center p-5">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Top Real Estate <br /> Listings in Portland
          </h1>
        </div>
      </div>

      <section className="container mx-auto px-6 mb-20">
        <>
          <FilterBar view={view} setView={setView} />
        </>
        <div
          className={`grid gap-6 mt-8 ${
            view === "list"
              ? "grid-cols-1"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {properties?.slice().reverse().map((property) => (
            <ExclusiveCard view={view} property={property} key={property?._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
