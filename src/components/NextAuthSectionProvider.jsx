"use client";

import { SessionProvider } from "next-auth/react";

export default function NextAuthSectionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
