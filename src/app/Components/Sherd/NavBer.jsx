"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import { useSession, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const NavBer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { data: session } = useSession();

  return (
    <section className="shadow-sm bg-black text-white relative z-50">
      <header
        className={`container mx-auto ${isHomePage ? "px-4 lg:px-24" : "px-6"}`}
      >
        <div className="flex items-center justify-between h-16">
          <h1 className="font-extrabold text-2xl md:text-3xl">HouseLease</h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLinks href="/" text="Home" />
            <NavLinks href="/properties" text="Properties" />
            <NavLinks href="/blog" text="Blog" />
            <NavLinks href="/gallery" text="Gallery" />
            <NavLinks href="/contact" text="Contact" />
            <NavLinks href="/about" text="About" />
          </nav>

          <div className="flex items-center">
            {/* Hamburger Menu for Mobile */}
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            {/* User Avatar and Dropdown */}
            <div className="relative flex items-center gap-3">
              <img
                src={session?.user.image}
                alt="avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute top-10 right-0 z-50 bg-white text-black shadow-lg w-44">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    <MdDashboard className="text-lg" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    <FiLogOut className="text-lg" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <nav className="flex flex-col gap-3 mx-2">
              <NavLinks href="/" text="Home" />
              <NavLinks href="/properties" text="Properties" />
              <NavLinks href="/blog" text="Blog" />
              <NavLinks href="/gallery" text="Gallery" />
              <NavLinks href="/contact" text="Contact" />
              <NavLinks href="/about" text="About" />
            </nav>
          </div>
        )}
      </header>
    </section>
  );
};

export default NavBer;
