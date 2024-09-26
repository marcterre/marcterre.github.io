import { FunctionComponent } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  margin?: string;
  zIndex?: number;
  titlePosition?: {
    top: string;
    right: string;
  };
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  margin = "0 0 0 0",
  zIndex,
  titlePosition,
}) => {
  return (
    <div
      className={`h-[30rem] w-72 flex border border-[#f0f0f0] p-2 absolute rounded-3xl bg-[#15151e] hover:ml-4 hover:scale-[1.01] cursor-pointer`}
      style={{ margin, zIndex }}
    >
      <p>{description}</p>
      <h2
        className="rotate-90 whitespace-nowrap h-fit relative top-[70px] right-[-64px]"
        style={titlePosition}
      >
        {title}
      </h2>
    </div>
  );
};

export default ProjectCard;
