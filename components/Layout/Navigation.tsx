"use client";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="grid h-fit mr-4 xl:m-0">
      {["Projects"].map((title, index) => {
        const isCurrentView =
          (pathname === "/" && title === "Projects") ||
          (pathname === "/cv" && title === "CV");
        return (
          <a
            href={title === "CV" ? "/cv" : "/"}
            key={index}
            className={`text-lg py-2 cursor-pointer ${
              isCurrentView ? "underline" : ""
            } hover:underline hover:bg-pink-900 hover:bg-opacity-30`}
          >
            {title}
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
