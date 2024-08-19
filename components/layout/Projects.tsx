"use client";
import { Project } from "@/types";
import { FunctionComponent } from "react";

type ProjectsProps = {
  projects: Project[];
};

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
  return (
    <div className="h-[70vh]">
      <h2 className="pb-12 text-3xl flex-none">Projects</h2>
      <div className="w-full h-full overflow-hidden">
        <div className="no-scrollbar grid content-start h-full overflow-y-auto pb-32 grid gap-12">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border border-2 h-fit">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-4">{project.description}</p>
              <ul className="mt-4 list-disc pl-5">
                {project.techStack.map((stack: string, index: number) => (
                  <li key={index}>{stack}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
