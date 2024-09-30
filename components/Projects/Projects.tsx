"use client";
import { Project } from "@/types";
import { FunctionComponent, useState } from "react";
import { ProjectCard } from ".";

type ProjectsProps = {
  projects: Project[];
};

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const sortedProjects = projects.sort((a, b) => {
    if (a.isCurrentProject) return -1;
    else if (b.isCurrentProject) return 1;
    else return 0;
  });
  return (
    <main className="w-full h-full relative z-10 flex-grow flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 max-w-4xl w-full">
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            isCurrentProject={project.isCurrentProject}
            projectUrl={project.url}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
