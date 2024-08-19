"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

type LinkProps = {
  url: string;
  icon?: ReactNode;
  name: string;
  isActive?: boolean;
  hasIcon?: boolean;
};

const LinkComponent = ({ url, icon, name, isActive, hasIcon }: LinkProps) => {
  const [hoveredLink, setHoveredLink] = useState("");
  return (
    <Link
      href={url}
      target="_blank"
      onMouseOver={() => setHoveredLink(name!.toLowerCase())}
      onMouseLeave={() => setHoveredLink("")}
    >
      <div className={`flex ${isActive ? "text-white" : ""}`}>
        {icon && (
          <span className={`${hasIcon ? "pr-1" : "sm:hidden"}`}>{icon}</span>
        )}
        <span
          className={`${icon && !hasIcon ? "hidden sm:block" : "block"} 
            ${
              hoveredLink === name.toLowerCase()
                ? "bg-linkBackgroundAnimated sm:hover:text-transparent"
                : ""
            }
            bg-cover bg-center  bg-clip-text `}
        >
          {name}
        </span>
      </div>
      <div
        className={`w-full h-0.5 hidden sm:block ${
          hoveredLink === name?.toLowerCase() ? "bg-linkBackgroundAnimated" : ""
        } `}
      ></div>
    </Link>
  );
};

export default LinkComponent;
