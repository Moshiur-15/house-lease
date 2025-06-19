"use client";
import { useSession } from "next-auth/react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  MapIcon,
  PieChart,
} from "lucide-react";
import { FaPlus, FaMoneyCheckAlt } from "react-icons/fa";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
};

export function AppSidebar(props) {
  const { data: session } = useSession();
  const role = session?.user?.role || "user";

  const fullNav = [
    {
      section: "Admin",
      items: [
        {
          id: 1,
          title: "ADMIN DASHBOARD",
          url: "/dashboard",
          icon: PieChart,
        },
        {
          id: 2,
          title: "MANAGE USERS",
          url: "/dashboard/AllUsers",
          icon: Bot,
        },
        {
          id: 3,
          title: "MANAGE PROPERTIES",
          url: "/dashboard/viewAllProperty",
          icon: MapIcon,
        },
        {
          id: 4,
          title: "ADD BLOG",
          url: "/dashboard/addBlog",
          icon: FaPlus,
        },
        {
          id: 5,
          title: "MANAGE BLOGS",
          url: "/dashboard/ManageBlog",
          icon: BookOpen,
        },
      ],
    },

    {
      section: "Seller",
      items: [
        {
          id: 8,
          title: "SELLER DASHBOARD",
          url: "/dashboard/seller",
          icon: PieChart,
        },
        {
          id: 9,
          title: "ADD PROPERTY",
          url: "/dashboard/add-property",
          icon: FaPlus,
        },
        {
          id: 10,
          title: "MANAGE PROPERTIES",
          url: "/dashboard/managePropertie",
          icon: MapIcon,
        },
        {
          id: 11,
          title: "MANAGE BOOKINGS",
          url: "/dashboard/manageBookings",
          icon: BookOpen,
        },
      ],
    },

    {
      section: "User",
      items: [
        {
          id: 12,
          title: "ANALYTICS",
          url: "/dashboard/analytics",
          icon: Command,
        },
        {
          id: 14,
          title: "WISHLIST",
          url: "/dashboard/wishlist",
          icon: GalleryVerticalEnd,
        },
        {
          id: 15,
          title: "MY BOOKINGS",
          url: "/dashboard/myBookings",
          icon: BookOpen,
        },
        {
          id: 13,
          title: "PAYMENT HISTORY",
          url: "/dashboard/paymentHistory",
          icon: MapIcon,
        },
      ],
    },
  ];

  // Filter menu based on user role
  const filteredNav = fullNav.filter((section) => {
    if (role === "admin") return section.section === "Admin";
    if (role === "seller") return section.section === "Seller";
    if (role === "buyer") return section.section === "User";
    return false;
  });

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={filteredNav} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
