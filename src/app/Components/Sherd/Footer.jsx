"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  const pathname = usePathname();
  const isFooterPage = pathname === "/";
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div
        className={`container mx-auto ${
          isFooterPage ? "px-4 lg:px-24" : "px-6"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#cc912a] mb-4">
              HouseLease
            </h3>
            <p className="text-gray-400">
              Artificial Intelligence Powered Property Management Solution
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 flex flex-col">
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
                href="/about"
                className="hover:text-[#FF8904] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#FF8904] transition-colors"
              >
                Contact
              </Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a
                  href="mailto:masiurislam28@gmail.com"
                  className="hover:text-[#FF8904]"
                >
                  <span className="underline underline-offset-2">Email</span>:
                  masiurislam28@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801327023639" className="hover:text-[#FF8904]">
                  <span className="underline underline-offset-2">Phone</span>:
                  +880 1327023639
                </a>
              </li>
              <li>
                <span className="underline underline-offset-2 hover:text-[#FF8904]">
                  Address
                </span>
                : Patuakhali, Barishal, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/masiur.isllam"
                target="_blank"
                className="text-gray-300 hover:text-[#FF8904] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/moshiur-islam28/"
                target="_blank"
                className="text-gray-300 hover:text-[#FF8904] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              <a
                href="https://github.com/Moshiur-15"
                target="_blank"
                className="text-gray-300 hover:text-[#FF8904] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} HouseLease AI. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
