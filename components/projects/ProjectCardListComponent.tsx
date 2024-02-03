import Link from "next/link";
import TagComponent from "../layout/TagComponent";

type ProjectCardListComponentProps = {
  title: string;
  description: string;
  techStack?: string[];
  link: string;
  tasks?: string[];
  isCurrenProject?: boolean;
};

const ProjectCardListComponent = function ({
  title,
  description,
  techStack,
  link,
  tasks,
  isCurrenProject,
}: ProjectCardListComponentProps) {
  return (
    <li
      key={title}
      className="rounded p-2 p-4 overflow-hidden transition ease-in-out duration-200 hover:bg-nightSky hover:text-white"
    >
      <Link href={link} className="grid gap-2" target="_blank">
        <h3 className="text-xl">{title}</h3>
        <div className="text-sm text-softGrey70">
          {description && <p>{description}</p>}
        </div>
        {techStack && (
          <div className="flex-wrap flex gap-2 pt-1">
            {techStack.map((tech) => {
              return <TagComponent key={tech} label={tech} />;
            })}
          </div>
        )}
        {tasks && isCurrenProject && (
          <>
            <div className="border-t border-softGrey30 w-80 mx-auto my-4" />
            <h3 className="font-bold text-sm">Planned implementations:</h3>
            <ul>
              {tasks.map((task) => {
                return (
                  <li key={task} className="text-sm list-disc	mx-4">
                    {task}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </Link>
    </li>
  );
};

export default ProjectCardListComponent;
