import { ExternalLink } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { FunctionComponent } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  isCurrentProject?: boolean;
  projectUrl?: string | LinkProps["href"];
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  techStack,
  isCurrentProject,
  projectUrl,
}) => {
  return (
    <>
      {isCurrentProject && (
        <p className="hidden md:block absolute top-[-25px] pl-4 text-pink-400 text-sm text-thin">
          Current
        </p>
      )}
      <Link
        href={projectUrl as LinkProps["href"]}
        target="_blank"
        className={`group md:grid hidden border-pink-400 bg-black bg-opacity-40 p-4 rounded border content-between  hover:bg-pink-900 hover:bg-opacity-30 transition-all duration-300`}
      >
        <div>
          <div className="flex justify-between align-center mb-2">
            <h3 className="text-lg font-semibold group-hover:underline group-hover:decoration-pink-400 group-hover:decoration-2 transition-all duration-300 decoration-transparent">
              {title}
            </h3>
            <ExternalLink
              size={20}
              className="text-pink-400 group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <p className="text-pink-300 mb-4 min-h-[75px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-pink-800 bg-opacity-50 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
