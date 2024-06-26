import FooterComponent from "@/components/layout/FooterComponent";
import HeaderComponent from "../../components/layout/HeaderComponent";
import projectsData from "../../public/assets/projects.json";
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
    <>
      <main className="w-full h-full">
        <HeaderComponent title="Projects" />
        <div className="sm:mx-auto h-full grid justify-items-center">
          {currentProjects.length > 0 && (
            <ProjectListWrapperComponent
              projects={currentProjects}
              isCurrenProject={true}
              title="Currently working on"
            />
          )}
          {notCurrentProjects.length > 0 ? (
            <ProjectListWrapperComponent
              projects={notCurrentProjects}
              isCurrenProject={false}
              title="Past projects"
            />
          ) : (
            <div className="py-16 text-sm text-softGrey40">
              More exciting projects planned!
            </div>
          )}
        </div>
      </main>
      <FooterComponent customClass="max-w-4xl" />
    </>
  );
};

export default ProjectPage;
