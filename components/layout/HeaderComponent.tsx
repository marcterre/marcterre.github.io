"use client";
import React from "react";
import LinkComponent from "../base/LinkComponent";
import { usePathname } from "next/navigation";
import SvgComponent from "../base/SvgComponent";
import ButtonComponent from "../base/ButtonComponent";

type HeaderComponentProps = {
  title: string;
};

type LinkType = {
  url?: string;
  name?: string;
  isActive?: boolean;
  icon?: React.ReactNode;
};

const HeaderComponent = ({ title }: HeaderComponentProps) => {
  const pathname = usePathname();

  const isProjectsCurrentPath = pathname === "/projects";
  const isHomeCurrentPath = pathname === "/";

  const getSvgFillingIfPathIsCurrentPath = (isCurrentPath: boolean) => {
    return isCurrentPath ? "white" : "rgba(203, 213, 225, 0.7)";
  };

  const links: LinkType[] = [
    {
      url: "./projects",
      name: "Projects",
      isActive: isProjectsCurrentPath,
      icon: (
        <SvgComponent
          variant="lightBulb"
          width="25"
          height="25"
          fill={getSvgFillingIfPathIsCurrentPath(isProjectsCurrentPath)}
        />
      ),
    },
    // {
    //   name: "Theme",
    //   icon: (
    //     <SvgComponent
    //       variant="moon"
    //       width="20"
    //       height="20"
    //       fill="rgba(203, 213, 225, 0.7)"
    //     />
    //   ),
    // },
  ];

  return (
    <div className="w-full grid gap-16">
      <div className="flex justify-between sm:px-4">
        <LinkComponent url="./" name="Home" isActive={isHomeCurrentPath} />
        <div className="flex w-full justify-end gap-1 items-center">
          {links.map((link, index) => {
            const { url, name, isActive, icon } = link;
            return url ? (
              <LinkComponent
                key={name}
                url={url}
                name={name!}
                isActive={isActive!}
                icon={icon}
              />
            ) : (
              <ButtonComponent
                key={index}
                icon={icon}
                handleClick={() => console.log("theme")}
              />
            );
          })}
        </div>
      </div>
      <h1 className="sm:text-4xl text-3xl text-bold text-white text-center">
        {title}
      </h1>
    </div>
  );
};

export default HeaderComponent;
