"use client";
import { FunctionComponent, TouchEvent, useState, useEffect } from "react";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ProjectCardsMobileProps = {
  projects: Project[];
};

const ProjectCardsMobile: FunctionComponent<ProjectCardsMobileProps> = ({
  projects,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const swipeDistance = touchStartX - touchEndX;

      if (swipeDistance > 50) {
        handleNext();
      } else if (swipeDistance < -50) {
        handlePrevious();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="md:hidden block overflow-hidden w-full grid content-center items-center justify-center">
      {projects[currentIndex].isCurrentProject && (
        <p
          className={`absolute top-16 left-4 text-xs font-semibold transition-opacity duration-100 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          Current
        </p>
      )}
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <Link
              href={project.url}
              target="_blank"
              key={index}
              className="min-h-[250px] min-w-full"
              style={{ flex: "0 0 100%" }}
            >
              <div className="h-full bg-black bg-opacity-30 p-4 rounded-lg border cursor-pointer border-pink-400">
                <div className="grid content-between h-full gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-md font-semibold">{project.title}</h3>
                      <ExternalLink size={20} className="text-pink-400" />
                    </div>
                    <p className="text-sm text-pink-300 min-h-[75px]">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-sm flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-pink-800 bg-opacity-50 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 transition-colors duration-300 ${
              index === currentIndex
                ? "bg-pink-500"
                : "bg-pink-500 bg-opacity-30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardsMobile;
