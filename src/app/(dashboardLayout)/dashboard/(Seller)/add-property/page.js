"use client";
import React, { useState } from "react";

const property = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    beds: "",
    baths: "",
    sqft: "",
    price: "",
    status: "For Sale",
    category: "",
    cardImage: "",
    detImg1: "",
    detImg2: "",
    detImg3: "",
    detImg4: "",
    description: "",
    rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e, name) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        [name]: imageUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Property Data:", formData);
  };

  const inputClass =
    "p-3 border border-gray-300 dark:border-gray-400 focus:outline-none focus:ring-0 w-full bg-white dark:bg-slate-800 text-black dark:text-white";

  return (
    <section className="p-4 sm:p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        ADD NEW PROPERTY
      </h2>

      <form onSubmit={handleSubmit} className="space-y-14">
        {/* TEXT SECTION */}
        <div className="bg-gray-100 dark:bg-slate-900 p-8 lg:p-12">
          <h3 className="text-xl font-semibold mb-4 uppercase text-gray-700 dark:text-gray-200">
            TEXT SECTION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                TITLE*
              </label>
              <input
                name="title"
                onChange={handleChange}
                value={formData.title}
                className={inputClass}
                placeholder="Title*"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                LOCATION*
              </label>
              <input
                name="location"
                onChange={handleChange}
                value={formData.location}
                className={inputClass}
                placeholder="Location*"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                BEDS*
              </label>
              <input
                name="beds"
                type="number"
                onChange={handleChange}
                value={formData.beds}
                className={inputClass}
                placeholder="Beds*"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                BATHS*
              </label>
              <input
                name="baths"
                type="number"
                onChange={handleChange}
                value={formData.baths}
                className={inputClass}
                placeholder="Baths*"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                SQFT*
              </label>
              <input
                name="sqft"
                type="number"
                onChange={handleChange}
                value={formData.sqft}
                className={inputClass}
                placeholder="Sqft*"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                PRICE*
              </label>
              <input
                name="price"
                type="number"
                onChange={handleChange}
                value={formData.price}
                className={inputClass}
                placeholder="Price*"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                CATEGORY*
              </label>
              <input
                name="category"
                onChange={handleChange}
                value={formData.category}
                className={inputClass}
                placeholder="Category*"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                YEARLY TAX RATE*
              </label>
              <input
                name="rate"
                type="number"
                onChange={handleChange}
                value={formData.rate}
                className={inputClass}
                placeholder="Yearly Tax Rate*"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                DESCRIPTION*
              </label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formData.description}
                className={inputClass}
                placeholder="Description*"
                rows={4}
              ></textarea>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="bg-gray-100 dark:bg-slate-900 p-8 lg:p-12">
          <h3 className="text-xl font-semibold mb-4 uppercase text-gray-700 dark:text-gray-200">
            IMAGE SECTION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                Card Image
              </label>
              <input
                name="cardImage"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "cardImage")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:bg-blue-50 file:border-none file:text-blue-700 file:cursor-pointer bg-white border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                Detail Image 1
              </label>
              <input
                name="detImg1"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "detImg1")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:bg-blue-50 file:border-none file:text-blue-700 file:cursor-pointer bg-white border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                Detail Image 2
              </label>
              <input
                name="detImg2"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "detImg2")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:bg-blue-50 file:border-none file:text-blue-700 file:cursor-pointer bg-white border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                Detail Image 3
              </label>
              <input
                name="detImg3"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "detImg3")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:bg-blue-50 file:border-none file:text-blue-700 file:cursor-pointer bg-white border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                Detail Image 4
              </label>
              <input
                name="detImg4"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "detImg4")}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:bg-blue-50 file:border-none file:text-blue-700 file:cursor-pointer bg-white border border-gray-300"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="mt-6 bg-[#FF8904] text-white px-6 py-3 transition-all shadow-lg hover:shadow-[#d4a973] dark:hover:shadow-[#e3af7397]"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default property;
