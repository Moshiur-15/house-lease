"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const imgbbApiKey = "58a9d3ffd0c8663f17be9ce8a26786ff";

const BlogSectionDesign = ({ id }) => {
  const router = useRouter();
  const BlogId = id._id;
  const BlogData = id;
  const [formData, setFormData] = useState({
    CardTitle: "",
    CardDes: "",
    DetailTitle: "",
    DetailDes1: "",
    DetailTitle1_1: "",
    DetailDes2: "",
    DetailDes2_1: "",
    Date: "",
    Location: "",
    detImg1: "",
  });

  const [uploading, setUploading] = useState({
    cardImage: false,
    detImg1: false,
  });

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

  useEffect(() => {
    if (BlogData) {
      setFormData({
        CardTitle: BlogData.CardTitle || "",
        CardDes: BlogData.CardDes || "",
        DetailTitle: BlogData.DetailTitle || "",
        DetailDes1: BlogData.DetailDes1 || "",
        DetailTitle1_1: BlogData.DetailTitle1_1 || "",
        DetailDes2: BlogData.DetailDes2 || "",
        DetailDes2_1: BlogData.DetailDes2_1 || "",
        Date: BlogData.Date || "",
        Location: BlogData.Location || "",
        cardImage: BlogData.cardImage || "",
        detImg1: BlogData.detImg1 || "",
      });
    }
  }, [BlogData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://house-lease.vercel.app/api/admin/blogs/${BlogId}`,
        formData
      );
      console.log(formData, res);
      alert("Blog updated successfully");
      router.push('/dashboard/manageBlog')
    } catch (err) {
      console.error(err);
    }
  };

  const inputClass =
    "p-3 border border-gray-300 dark:border-gray-400 focus:outline-none focus:ring-0 w-full bg-white dark:bg-slate-800 text-black dark:text-white";

  return (
    <section className="p-4 sm:p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        UPDATE BLOG
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
                name="CardTitle"
                onChange={handleChange}
                value={formData.CardTitle}
                className={inputClass}
                placeholder="Card Title*"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                DETAIL TITLE*
              </label>
              <input
                name="DetailTitle"
                onChange={handleChange}
                value={formData.DetailTitle}
                className={inputClass}
                placeholder="Detail Title*"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                DETAIL TITLE 1_1*
              </label>
              <input
                name="DetailTitle1_1"
                onChange={handleChange}
                value={formData.DetailTitle1_1}
                className={inputClass}
                placeholder="DetailTitle1_1*"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                DATE*
              </label>
              <input
                name="Date"
                type="date"
                onChange={handleChange}
                value={formData.Date}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                LOCATION*
              </label>
              <input
                name="Location"
                onChange={handleChange}
                value={formData.Location}
                className={inputClass}
                placeholder="Location*"
                required
              />
            </div>
            <div className="lg:flex md:col-span-2 lg:col-span-3 gap-6">
              <div className="w-full lg:w-1/2">
                <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                  DESCRIPTION*
                </label>
                <textarea
                  name="CardDes"
                  onChange={handleChange}
                  value={formData.CardDes}
                  className={inputClass}
                  placeholder="Card Description*"
                  rows={4}
                  required
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                  DETAIL DESCRIPTION*
                </label>
                <textarea
                  name="DetailDes1"
                  onChange={handleChange}
                  value={formData.DetailDes1}
                  className={inputClass}
                  placeholder="Description 1*"
                  rows={4}
                  required
                />
              </div>
            </div>

            <div className="lg:flex md:col-span-2 lg:col-span-3 gap-6">
              <div className="w-full lg:w-1/2">
                <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                  DESCRIPTION 2*
                </label>
                <textarea
                  name="DetailDes2"
                  onChange={handleChange}
                  value={formData.DetailDes2}
                  className={inputClass}
                  placeholder="Description 2*"
                  rows={4}
                  required
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                  DESCRIPTION 3*
                </label>
                <textarea
                  name="DetailDes2_1"
                  onChange={handleChange}
                  value={formData.DetailDes2_1}
                  className={inputClass}
                  placeholder="Description 3*"
                  rows={4}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="bg-gray-100 dark:bg-slate-900 p-8 lg:p-12">
          <h3 className="text-xl font-semibold mb-4 uppercase text-gray-700 dark:text-gray-200">
            IMAGE SECTION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-20">
            {[
              { label: "Card Image*", name: "cardImage" },
              { label: "Detail Image*", name: "detImg1" },
            ].map(({ label, name }) => (
              <div key={name}>
                <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
                  {label}
                </label>
                <input
                  required
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

        <div>
          <button
            type="submit"
            disabled={Object.values(uploading).some((v) => v)}
            className="mt-6 bg-[#FF8904] text-white px-6 py-3 transition-all shadow-lg hover:shadow-[#d4a973] dark:hover:shadow-[#e3af7397] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default BlogSectionDesign;
