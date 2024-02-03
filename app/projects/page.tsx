import Link from "next/link";
import HeaderComponent from "../../components/header/HeaderComponent";
import TagComponent from "../../components/layout/TagComponent";
import projectsData from "../../public/assets/projects.json";
import ProjectCardListComponent from "@/components/projects/ProjectCardListComponent";
import ProjectListWrapperComponent from "@/components/projects/ProjectListWrapperComponent";

type ProjectType = {
  title: string;
  description: string;
  techStack?: string[];
  link: string;
  task?: string;
  isCurrentProject?: boolean;
};

const ProjectPage = function () {
  const projects: ProjectType[] = projectsData;

  const currentProjects = projects.filter((project) => {
    return project.isCurrentProject;
  });

  const notCurrentProjects = projects.filter((project) => {
    return !project.isCurrentProject;
  });

  return (
    <main className="w-full h-full">
      <HeaderComponent title="Projects" />
      <div className="sm:mx-80 h-full grid justify-items-center">
        {currentProjects.length > 0 && (
          <ProjectListWrapperComponent
            projects={currentProjects}
            isCurrenProject={true}
            title="Currently working on"
          />
        )}
        {projects.length > 0 && notCurrentProjects.length > 0 ? (
          <ProjectListWrapperComponent
            projects={projects}
            isCurrenProject={false}
            title="All projects"
          />
        ) : (
          <div className="py-16 text-sm text-softGrey30">
            More exciting projects planned!
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
