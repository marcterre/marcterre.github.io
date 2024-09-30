"use client";
import { FunctionComponent, useRef, useState } from "react";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ProjectCardsMobileProps = {
  projects: Project[];
};

const ProjectCardsMobile: FunctionComponent<ProjectCardsMobileProps> = ({
  projects,
}) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const changeProject = (direction: "next" | "prev") => {
    if (isAnimating || !projectsRef.current) return;
    setIsAnimating(true);

    const newIndex =
      direction === "next"
        ? (currentProjectIndex + 1) % projects.length
        : (currentProjectIndex - 1 + projects.length) % projects.length;

    const startPos = direction === "next" ? "-100%" : "100%";
    const endPos = "0%";

    projectsRef.current.style.transition = "transform 0.5s ease-in-out";
    projectsRef.current.style.transform = `translateX(${startPos})`;

    setTimeout(() => {
      projectsRef.current!.style.transition = "none";
      projectsRef.current!.style.transform = `translateX(${
        direction === "next" ? "100%" : "-100%"
      })`;
      setCurrentProjectIndex(newIndex);

      setTimeout(() => {
        projectsRef.current!.style.transition = "transform 0.5s ease-in-out";
        projectsRef.current!.style.transform = `translateX(${endPos})`;
        setIsAnimating(false);
      }, 50);
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.targetTouches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 75) {
      changeProject(swipeDistance > 0 ? "next" : "prev");
    }
  };

  return (
    <div
      className="md:hidden overflow-hidden w-full relative grid content-center items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={projectsRef}
        className="h-[250px] transition-transform duration-500 ease-in-out"
      >
        <Link
          href={projects[currentProjectIndex].url}
          target="_blank"
          className="min-h-[250px]"
        >
          <div
            className={`h-full bg-black bg-opacity-30 p-4 rounded-lg border cursor-pointer ${
              projects[currentProjectIndex].isCurrentProject
                ? "border-pink-400 shadow-lg shadow-pink-500/50"
                : "border-pink-700"
            }`}
          >
            <div className="grid content-between h-full">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    {projects[currentProjectIndex].title}
                  </h3>
                  <ExternalLink size={20} className="text-pink-400" />
                </div>
                <p className="text-pink-300 min-h-[75px]">
                  {projects[currentProjectIndex].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {projects[currentProjectIndex].techStack.map(
                  (tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-pink-800 bg-opacity-50 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center m-4">
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentProjectIndex
                  ? "bg-pink-500"
                  : "bg-pink-500 bg-opacity-30"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardsMobile;
