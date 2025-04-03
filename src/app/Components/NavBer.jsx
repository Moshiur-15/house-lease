"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="shadow-sm bg-black">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="font-extrabold text-2xl md:text-3xl">HouseLease</h1>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              href="/properties"
              className="hover:text-blue-600 transition-colors"
            >
              Properties
            </Link>
            <Link
              href="/blog"
              className="hover:text-blue-600 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/gallery"
              className="hover:text-blue-600 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6">
              Login
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 hover:text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <nav className="flex flex-col gap-3">
              <Link href="/" className="p-2 hover:bg-gray-50 hover:text-black rounded">
                Home
              </Link>
              <Link href="/properties" className="p-2 hover:bg-gray-50 hover:text-black rounded">
                Properties
              </Link>
              <Link href="/blog" className="p-2 hover:bg-gray-50 hover:text-black rounded">
                Blogs
              </Link>
              <Link
              href="/gallery"
              className="hover:text-blue-600 transition-colors"
            >
              Gallery
            </Link>
              <Link href="/about" className="p-2 hover:bg-gray-50 hover:text-black rounded">
                About Us
              </Link>
              <Link href="/contact" className="p-2 hover:bg-gray-50 hover:text-black rounded">
                Contact
              </Link>
            </nav>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6">
              Login
            </button>
          </div>
        )}
      </header>
    </section>
  );
};

export default NavBer;
