"use client";
// import { useAuth } from "@/app/context/AuthContext";
import "../../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import { useSession, signOut } from "next-auth/react";

const NavBer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { data: session } = useSession();
  // console.log(session)

  return (
    <section className="shadow-sm bg-black text-white">
      <header
        className={`container mx-auto ${isHomePage ? "px-4 lg:px-24" : "px-6"}`}
      >
        <div className="flex items-center justify-between h-16">
          <h1 className="font-extrabold text-2xl md:text-3xl">HouseLease</h1>

          <nav className="hidden lg:flex items-center gap-8">
            <NavLinks href="/" text="Home" />
            <NavLinks href="/properties" text="Properties" />
            <NavLinks href="/blog" text="Blog" />
            <NavLinks href="/gallery" text="Gallery" />
            <NavLinks href="/contact" text="Contact" />
            <NavLinks href="/about" text="About" />
            {/* <Link
              href="/dashboard"
              className="hover:text-[#FF8904] transition-colors"
            >
              Dashboard
            </Link> */}
            {session?.user ? (
              <div className="flex items-center gap-3">
                <img
                  src={session.user.image}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  className="bg-red-500 px-3 py-1 rounded"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </div>
            ) : (
              <a href="/Auth/Login" className="bg-green-500 px-3 py-1 rounded">
                Login
              </a>
            )}
          </nav>

          {/* menu */}
          {/* <div className="flex flex-row gap-2">
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/Auth/Login">
                <button className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white font-bold py-3 px-6">
                  Login
                </button>
              </Link>
            </div>
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
          </div> */}
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <nav className="flex flex-col gap-3 mx-2">
              <NavLinks href="/" text="Home" />
              <NavLinks href="/properties" text="Properties" />
              <NavLinks href="/blog" text="Blog" />
              <NavLinks href="/gallery" text="Gallery" />
              <NavLinks href="/contact" text="Contact" />
              <NavLinks href="/about" text="About" />
              <Link
                href="/dashboard"
                className="hover:text-[#FF8904] transition-colors"
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
