import TagComponent from "../Layout/TagComponent";
import Image from "next/image";
import { getAllProjects } from "../../lib/mongodb/projects";

type Project = {
  title: string;
  description: string;
  cover: string;
  techStack: string[];
  preview: {
    link: string;
    icon: string;
  };
  codeBase: {
    link: string;
    icon: string;
  };
};

const fetchProjects = async () => {
  const { projects: projectsData, error } = await getAllProjects();
  return projectsData;
};

const ProjectsComponent = async function () {
  const projects = await fetchProjects();

  return (
    <div className="border sm:w-1/2 h-full grid overflow-scroll pb-10">
      <h2 className="text-center p-10">Projects</h2>
      <div className="grid gap-10 justify-items-center items-center sm:px-14 px-5">
        {projects.map((project: Project, index: number) => {
          const { title, description, cover, techStack, preview, codeBase } =
            project;

          const { link: previewLink, icon: previewIcon } = preview;
          const { link: codeBaseLink, icon: codeBaseIcon } = codeBase;
          return (
            <div
              key={index}
              className="grid  bg-white gap-4 w-full border shadow-lg shadow-black/50 rounded-md p-5"
            >
              <div className="flex">
                <h3 className="w-full">{title}</h3>
                {(previewLink || codeBaseLink) && (
                  <div className="flex justify-end text-[0.9rem] w-full gap-2">
                    {previewLink && <a href={previewLink}>preview</a>}
                    {codeBaseLink && <a href={codeBaseLink}>codebase</a>}
                  </div>
                )}
              </div>
              {cover && (
                <div className="flex justify-center items-center p-2">
                  <Image
                    width={500}
                    height={333}
                    className="object-cover max-h-72"
                    src={cover}
                    alt={`Failed to load cover from ${title}.`}
                  />
                </div>
              )}
              {description && <p>{description}</p>}
              <ul className="flex flex-wrap gap-1 justify-end">
                {techStack.map((tech, index) => {
                  return <TagComponent key={index} label={tech} />;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
