"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <div key={item.section}>
            {/* Section Heading */}
            {/* <h2 className="font-bold text-lg mt-4">{console.log(item.section)}</h2> */}

            {item.items.map((subItem) => {
              const isActive = pathname === subItem.url;

              return (
                <SidebarMenuItem key={subItem.id}>
                  <Link href={subItem.url} className="w-full">
                    <SidebarMenuButton
                      className={`flex hover:cursor-pointer active:scale-95 duration-500 items-center gap-2 w-full text-left transition-colors ${
                        isActive ? "text-[#FF8904] font-semibold" : "hover:text-[#FF8904]"
                      }`}
                    >
                      {subItem.icon && (
                        <subItem.icon className="w-4 h-4" />
                      )}
                      <span>{subItem.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
