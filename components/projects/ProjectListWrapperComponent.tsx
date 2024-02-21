import ProjectCardListComponent from "./ProjectCardListComponent";

type ProjectType = {
  title: string;
  description: string;
  techStack?: string[];
  link: string;
  tasks?: string[];
  isCurrentProject?: boolean;
};

type ProjectListWrapperComponentProps = {
  projects: ProjectType[];
  isCurrenProject?: boolean;
  title: string;
};

const ProjectListWrapperComponent = function ({
  projects,
  isCurrenProject,
  title,
}: ProjectListWrapperComponentProps) {
  return (
    projects.length > 0 && (
      <div
        className={`grid gap-8 pt-12 ${
          projects.length > 1 ? "max-w-4xl" : "max-w-md"
        }`}
      >
        <h2 className="text-center font-bold text-white">{title}</h2>
        <ul
          className={`grid gap-8 ${
            projects.length > 1 ? "sm:grid-cols-2" : "justify-center"
          }`}
        >
          {projects.map((project) => {
            const { title, description, techStack, link, tasks } = project;

            return (
              <ProjectCardListComponent
                key={title}
                title={title}
                description={description}
                techStack={techStack}
                link={link}
                tasks={tasks}
                isCurrenProject={isCurrenProject}
              />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default ProjectListWrapperComponent;
