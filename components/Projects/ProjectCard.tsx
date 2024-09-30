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
    <Link
      href={projectUrl as LinkProps["href"]}
      target="_blank"
      className={`md:block hidden bg-black bg-opacity-40 p-4 rounded-lg border h-fit ${
        isCurrentProject
          ? "border-pink-400 shadow-lg shadow-pink-500/50"
          : "border-pink-700"
      } hover:bg-pink-900 hover:bg-opacity-30 transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <ExternalLink size={20} className="text-pink-400" />
      </div>
      <div className="grid content-between">
        <p className="text-pink-300 mb-2 min-h-[75px]">{description}</p>
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
      </div>
    </Link>
  );
};

export default ProjectCard;
