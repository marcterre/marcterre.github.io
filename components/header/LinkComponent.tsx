"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SvgComponent from "../base/SvgComponent";
import ButtonComponent from "../base/ButtonComponent";

type LinkType = {
  url?: string;
  name?: string;
  isActive?: boolean;
  icon?: React.ReactNode;
};

const LinkComponent = () => {
  const pathname = usePathname();

  const isProjectsCurrentPath = pathname === "/projects";

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
    <div className="flex justify-between sm:px-4">
      <Link href="./">Home</Link>
      <div className="flex w-full justify-end gap-1 items-center">
        {links.map((link, index) => {
          const { url, name, isActive, icon } = link;
          return url ? (
            <Link key={index} href={url}>
              <div
                className={`px-2 hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                <span className={`${icon ? "sm:hidden" : "hidden"}`}>
                  {icon}
                </span>
                <span className={`${icon ? "hidden sm:block" : "block"}`}>
                  {name}
                </span>
              </div>
            </Link>
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
  );
};

export default LinkComponent;
