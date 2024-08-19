"use client";
import { Project } from "@/types";
import Link from "next/link";
import { FunctionComponent } from "react";

type ProjectsProps = {
  projects: Project[];
};

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
  return (
    <div className="h-[70vh]">
      <h2 className="md:pb-12 pb-8 md:text-3xl text-xl flex-none">Projects</h2>
      <div className="w-full h-full overflow-hidden">
        <div className="scrollbar-custom grid content-start h-full overflow-y-auto pb-32 grid gap-8 md:gap-12">
          {projects.map((project) => (
            <Link
              target="_blank"
              href={project.url}
              key={project.id}
              className="p-4 mx-1 border border-neutral-400/30 hover:border-white hover:text-white h-fit"
            >
              <h2 className="font-bold text-lg">{project.title}</h2>
              <p className="mt-8">{project.description}</p>
              <ul className="mt-8 flex flex-wrap md:gap-4 gap-2.5">
                {project.techStack.map((stack: string, index: number) => (
                  <li key={index} className="text-xs bg-[#fa4580]/20 p-2">
                    {stack}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
