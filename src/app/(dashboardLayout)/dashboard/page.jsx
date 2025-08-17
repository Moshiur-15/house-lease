"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import WelcomePage from "@/app/Components/Sherd/WelcomePage";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push(`/Auth/Login`);
    }
  }, [status, router]);

  return (
    <div>
      <WelcomePage session={session} />
    </div>
  );
}
