"use client";
import { useState } from "react";

export default function AboutUs() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div
      className="min-h-[calc(100vh-350px)] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      <section className="flex flex-col md:flex-row items-center justify-center container mx-auto py-8">
        <div className="relative z-10 w-full md:w-1/2 text-white px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">
            WANT TO KNOW YOUR PROPERTY&apos;S WORTH?
          </h1>

          <p className="text-lg">
            Gain insight into the true worth of your property through a thorough
            and professional valuation process. Our team of experts meticulously
            assesses various factors including location, size, condition, and
            recent market trends to provide you with an accurate estimation of
            your home&apos;s value.
          </p>
        </div>

        <div className="relative z-10 w-full md:w-1/2 bg-white rounded-tr-4xl rounded-bl-4xl p-8 max-w-xl mx-auto">
          {formSent && (
            <div className="bg-green-200 text-green-800 text-sm p-2 rounded mb-4">
              The message was sent! Your request will be confirmed via email or
              private message.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
                required
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Country"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="State"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="City"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Zip"
                className="p-3 border  w-full focus:outline-none focus:ring-0"
              />
            </div>
            <textarea
              placeholder="  Message"
              className="h-24 border  w-full focus:outline-none focus:ring-0"
              required
            ></textarea>
            <label className="flex items-center text-sm">
              <input type="checkbox" required className="mr-2" />I consent to
              having my information saved
            </label>
            <button className="group relative px-8 border w-full border-black overflow-hidden py-2.5 mt-4 transition-all duration-500 hover:border-transparent bg-black">
              <div className="absolute inset-0 w-0 bg-white transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black">
                Send Mail
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
