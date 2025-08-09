"use client";
import { FaThLarge, FaBars } from "react-icons/fa";

const FilterBar = ({ view, setView, search, setSearch }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border dark:border-gray-800 border-gray-200 dark:bg-gray-900 bg-white mt-10">
      {/* Filters Section */}
      <div>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border dark:border-gray-800 border-gray-200 dark:bg-gray-900 bg-white focus:outline-none focus:ring-0 focus:ring-blue-500 px-4 py-2"
          placeholder="Search..."
        />
      </div>

      {/* View Toggle Section */}
      <div className="md:flex items-center gap-2 hidden">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded hover:bg-gray-100 transition ${
            view === "grid" ? "bg-gray-100 dark:bg-gray-800" : ""
          }`}
        >
          <FaThLarge className="text-gray-700 w-4 dark:text-white h-4" />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded hover:bg-gray-100 transition ${
            view === "list" ? "bg-gray-100 dark:bg-gray-800" : ""
          }`}
        >
          <FaBars className="text-gray-700 w-4 h-4 dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
