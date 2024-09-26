"use client";
import { Project } from "@/types";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import ProjectCard from "../ProjectCard";

type ProjectsProps = {
  projects: Project[];
};

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const sortedProjects = projects.sort((a, b) => {
    if (a.isCurrentProject) return 1;
    else if (b.isCurrentProject) return -1;
    else return 0;
  });
  return (
    <div className="h-full w-1/2 pl-8">
      <h2 className="mb-2">Projects</h2>
      <div className="pt-16 ml-[89px]">
        {sortedProjects.map((project, index) => {
          console.log(project.title, index);
          return (
            <ProjectCard
              titlePosition={{
                top: "0",
                right: "0",
              }}
              margin={`-${index * 5}px 0 0 -${index * 45}px`}
              key={index}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
