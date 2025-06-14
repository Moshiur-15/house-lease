"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const imgbbApiKey = "58a9d3ffd0c8663f17be9ce8a26786ff";

const PropertyUpdateModal = ({ property }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    beds: "",
    baths: "",
    sqft: "",
    price: "",
    category: "",
    cardImage: "",
    detImg1: "",
    detImg2: "",
    detImg3: "",
    detImg4: "",
    description: "",
    rate: "",
  });

  const [uploading, setUploading] = useState({
    cardImage: false,
    detImg1: false,
    detImg2: false,
    detImg3: false,
    detImg4: false,
  });

  useEffect(() => {
    if (property) {
      setFormData((prev) => ({
        ...prev,
        ...property,
        rate: property?.rate || "",
      }));
    }
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async (e, name) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading((prev) => ({ ...prev, [name]: true }));

    const formDataUpload = new FormData();
    formDataUpload.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formDataUpload
      );

      const imageUrl = res.data.data.display_url;
      setFormData((prev) => ({
        ...prev,
        [name]: imageUrl,
      }));
    } catch (error) {
      console.error(`Failed to upload ${name}`, error);
      alert(`Image upload failed for ${name}`);
    } finally {
      setUploading((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/property/${property._id}`,
        formData
      );
      console.log(response.data);
      alert("Property updated successfully.");
      router.push('/dashboard/managePropertie')
    } catch (err) {
      console.error(err);
    }
  };

  const inputClass =
    "p-3 border border-gray-300 dark:border-gray-400 focus:outline-none focus:ring-0 w-full bg-white dark:bg-slate-800 text-black dark:text-white";
  return (
    <div>
      <section className="p-4 sm:p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          UPDATE PROPERTY
        </h2>

        <form onSubmit={handleSubmit} className="space-y-14">
          {/* TEXT SECTION */}
          <div className="bg-gray-100 dark:bg-slate-900 p-8 lg:p-12">
            <h3 className="text-xl font-semibold mb-4 uppercase text-gray-700 dark:text-gray-200">
              TEXT SECTION
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { label: "TITLE*", name: "title" },
                { label: "LOCATION*", name: "location" },
                { label: "BEDS*", name: "beds", type: "number" },
                { label: "BATHS*", name: "baths", type: "number" },
                { label: "SQFT*", name: "sqft", type: "number" },
                { label: "PRICE*", name: "price", type: "number" },
                { label: "CATEGORY*", name: "category" },
                { label: "YEARLY TAX RATE*", name: "rate", type: "number" },
              ].map(({ label, name, type = "text" }) => (
                <div key={name}>
                  <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                    {label}
                  </label>
                  <input
                    name={name}
                    type={type}
                    onChange={handleChange}
                    value={formData[name] || ""}
                    className={inputClass}
                    placeholder={label}
                    required
                  />
                </div>
              ))}

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
                  required
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
              {[
                { label: "Card Image*", name: "cardImage" },
                { label: "Detail Image 1*", name: "detImg1" },
                { label: "Detail Image 2*", name: "detImg2" },
                { label: "Detail Image 3*", name: "detImg3" },
                { label: "Detail Image 4*", name: "detImg4" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                    {label}
                  </label>
                  <input
                    name={name}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, name)}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:bg-blue-50 file:border-none file:text-blue-700 file:cursor-pointer bg-white border border-gray-300"
                    disabled={uploading[name]}
                  />
                  {uploading[name] && (
                    <p className="text-xs text-blue-500 mt-1">Uploading...</p>
                  )}
                  {formData[name] && !uploading[name] && (
                    <img
                      src={formData[name]}
                      alt={`${label} preview`}
                      className="mt-2 max-h-32 object-cover w-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTONS */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={Object.values(uploading).some((v) => v)}
              className="bg-[#FF8904] text-white px-6 py-3 shadow-lg hover:shadow-[#d4a973] dark:hover:shadow-[#e3af7397] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PropertyUpdateModal;
