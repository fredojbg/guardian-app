"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star, User } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DashboardNav } from "../dashboard-nav";
import { navItems } from "@/constants/data";

const font = Poppins({ subsets: ["latin"], weight: "600" });

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("contacts");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/dashboard" className="flex items-center gap-x-2 text-sm">
        <Image
          src="/logos/logotipo-cinza.png"
          alt="logo"
          width={160}
          height={60}
        />
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <DashboardNav items={navItems} />
      </div>
    </div>
  );
};
