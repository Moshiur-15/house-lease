"use client";
import "../../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <section className="shadow-sm bg-black text-white">
      <header
        className={`container mx-auto ${isHomePage ? "px-4 lg:px-24" : "px-6"}`}
      >
        <div className="flex items-center justify-between h-16">
          <h1 className="font-extrabold text-2xl md:text-3xl">HouseLease</h1>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="hover:text-[#FF8904] transition-colors">
              Home
            </Link>
            <Link
              href="/properties"
              className="hover:text-[#FF8904] transition-colors"
            >
              Properties
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#FF8904] transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/gallery"
              className="hover:text-[#FF8904] transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FF8904] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="hover:text-[#FF8904] transition-colors"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-[#FF8904] transition-colors"
            >
              Dashboard
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link href="/Auth/Login">
              <button className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white font-bold py-3 px-6">
                Login
              </button>
            </Link>
          </div>

          {/* menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg cursor-pointer"
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
              <Link
                href="/"
                className="p-2 hover:text-[#FF8904] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/properties"
                className="p-2 hover:text-[#FF8904] transition-colors"
              >
                Properties
              </Link>
              <Link
                href="/blog"
                className="p-2 hover:text-[#FF8904] transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/gallery"
                className="p-2 hover:text-[#FF8904] transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="p-2 hover:text-[#FF8904] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="p-2 hover:text-[#FF8904] transition-colors"
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="p-2 hover:text-[#FF8904] transition-colors"
              >
                Dashboard
              </Link>
            </nav>
            <Link href="/Auth/Login">
              <button className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white font-bold py-3 px-6">
                Login
              </button>
            </Link>
          </div>
        )}
      </header>
    </section>
  );
};

export default NavBer;
