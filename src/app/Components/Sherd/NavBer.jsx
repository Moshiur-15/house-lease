"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import { useSession, signOut } from "next-auth/react";

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

            {/* {session?.user ? (
              <div className="relative">
                <img
                  src={session.user.image}
                  alt="avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded w-40">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/Auth/Login">
                <button className="bg-green-500 px-3 py-1 rounded">
                  Login
                </button>
              </Link>
            )} */}
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
            <div className="flex items-center gap-3">
              {session?.user ? (
                <>
                  <img
                    src={session.user.image}
                    alt="avatar"
                    className="w-8 h-8 rounded-full cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                  {showDropdown && (
                    <div className="absolute top-20 right-6 bg-white text-black shadow-md rounded w-40">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setShowDropdown(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link href="/Auth/Login">
                  <button className="bg-[#FF8904] px-5 py-1.5 hover:cursor-pointer hover:bg-[#FF8904]/90">
                    Login
                  </button>
                </Link>
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
