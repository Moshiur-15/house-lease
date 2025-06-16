"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavLinks = ({ href, text }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div>
      <Link
        href={href}
        className={`transition-colors ${
          isActive ? "text-[#FF8904]" : "hover:text-[#FF8904]"
        }`}
      >
        {text}
      </Link>
    </div>
  );
};
