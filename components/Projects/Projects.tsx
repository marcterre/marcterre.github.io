import { Project } from "@/types";
import { FunctionComponent } from "react";
import { ProjectCard } from ".";
import ProjectCardsMobile from "./ProjectCardsMobile";

type ProjectsProps = {
  projects: Project[];
};

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
  const sortedProjects = projects.sort((a, b) => {
    if (a.isCurrentProject) return -1;
    else if (b.isCurrentProject) return 1;
    else return 0;
  });
  return (
    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full h-full md:h-fit no-scrollbar overflow-scroll">
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
      <ProjectCardsMobile projects={sortedProjects} />
    </div>
  );
};

export default Projects;
