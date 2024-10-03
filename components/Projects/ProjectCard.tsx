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
      className={`md:grid hidden bg-black bg-opacity-40 p-4 rounded-lg border content-between ${
        isCurrentProject
          ? "border-pink-400 shadow-lg shadow-pink-500/50"
          : "border-pink-700"
      } hover:bg-pink-900 hover:bg-opacity-30 transition-all duration-300`}
    >
      <div>
        <div className="flex justify-between align-center mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <ExternalLink size={20} className="text-pink-400" />
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
  );
};

export default ProjectCard;
