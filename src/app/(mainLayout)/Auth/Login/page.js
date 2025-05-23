"use client";
import React from "react";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="min-h-[calc(100vh-430px)] flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://source.unsplash.com/600x400/?login,technology"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            LOGIN TO YOUR ACCOUNT
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
