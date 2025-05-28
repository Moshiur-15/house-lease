import Link from "next/link";
import React from "react";

export const NavLinks = ({ href, text }) => {
  return (
    <div>
      <Link href={href} className="hover:text-[#FF8904] transition-colors">
        {text}
      </Link>
    </div>
  );
};
