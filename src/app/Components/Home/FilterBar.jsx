"use client";

import { FaThLarge, FaBars } from "react-icons/fa";
import { useState } from "react";

const FilterBar = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="flex items-center justify-between px-6 py-3 border border-gray-200 bg-white mt-10">
      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6 w-full md:w-auto">
        {/* Types Dropdown */}
        <select  className="w-full md:w-auto outline-0">
          <option value="default">
            Types
          </option>
          <option value="type1" className="">Type 1</option>
          <option value="type2">Type 2</option>
          <option value="type3">Type 3</option>
        </select>

        {/* Categories Dropdown */}
        <select className="w-full md:w-auto outline-0">
          <option value="default">
            Categories
          </option>
          <option value="cat1">Category 1</option>
          <option value="cat2">Category 2</option>
          <option value="cat3">Category 3</option>
        </select>

        {/* States Dropdown */}
        <select className="w-full md:w-auto outline-0">
          <option value="default">
            States
          </option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>

        {/* Areas Dropdown (Hidden) */}
        <select className="w-full md:w-auto outline-0">
          <option value="default">
            Areas
          </option>
          <option value="north">North</option>
          <option value="south">South</option>
        </select>

        {/* Default Dropdown (Hidden) */}
        <select className="w-full md:w-auto outline-0">
          <option value="default">
            Default
          </option>
          <option value="basic">Basic</option>
        </select>
      </div>

      {/* View Toggle Section */}
      <div className="md:flex items-center gap-2 hidden">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded hover:bg-gray-100 transition ${
            view === "grid" ? "bg-gray-100" : ""
          }`}
        >
          <FaThLarge className="text-gray-700 w-4 h-4" />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded hover:bg-gray-100 transition ${
            view === "list" ? "bg-gray-100" : ""
          }`}
        >
          <FaBars className="text-gray-700 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
