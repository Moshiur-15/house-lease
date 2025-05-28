"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";

// 👇 Replace with your actual API key
const imgbbApiKey = "58a9d3ffd0c8663f17be9ce8a26786ff";

const RegisterPage = () => {
  const inputStyle =
    "w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-0 bg-white text-black";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const { login } = useAuth();
  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formDataUpload
      );
      const imageUrl = res.data.data.display_url;
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    try {
      setRegister(true);
      const  res  = await axios.post(
        "http://localhost:3000/api/auth?register=true",
        formData
      );
      setMessage("Account created successfully");
      login(res.data)
    } catch (err) {
      console.error("Error submitting data", err);
    } finally {
      setRegister(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">SIGN UP</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-700">Username</label>
            <input
              name="name"
              type="text"
              className={inputStyle}
              placeholder="Your username"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 text-gray-700">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm file:py-2 file:px-4 file:bg-blue-50 file:border-none file:text-blue-700 file:cursor-pointer border border-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              className={inputStyle}
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              className={inputStyle}
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 mt-2 hover:bg-gray-800 transition duration-300"
            disabled={register}
          >
            {register ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 py-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-transparent duration-300"
            onClick={() => alert("Google login not implemented yet")}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Create Account Google
          </button>
        </form>
        {message && (
          <p className="text-green-600 font-bold text-sm">
            {message.toUpperCase()}
          </p>
        )}
        {/* Already have account */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/Auth/Login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
