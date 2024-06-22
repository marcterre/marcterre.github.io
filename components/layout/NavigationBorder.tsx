"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ButtonComponent } from "../base/ButtonComponent";

type NavigationBorderProps = {
  navLinks: { name: string; slug: string }[];
};

export const NavigationBorder = ({ navLinks }: NavigationBorderProps) => {
  const pathname = usePathname();

  const getActivePath = (slug: string) => {
    if (pathname === `/${slug}`) {
      return "text-white";
    }
    return "text-pinkShell";
  };

  return (
    <>
      <div className="rounded-xl border-pinkShell border-3 w-full h-full"></div>
      <div className="hidden md:flex absolute bottom-[24px] left-[57px] gap-5 pl-[30px]">
        {navLinks.map((navLink, index) => (
          <div className="rounded-b-2xl border-pinkShell border-x-3 border-b-3 py-1.5 px-6">
            <Link
              className={`text-xs ${getActivePath(navLink.slug)}`}
              href={`/${navLink.slug}`}
            >
              {navLink.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
