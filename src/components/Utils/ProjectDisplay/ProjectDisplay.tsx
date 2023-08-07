import "./ProjectDisplay.styles.scss";
import { Button } from "../../Inputs";

type ProjectDisplayType = {
  title?: string;
  src?: string;
  alt?: string;
  techStack?: string[];
  style?: React.CSSProperties;
  preview?: boolean;
};

export const ProjectDisplay = (props: ProjectDisplayType) => {
  const { title, src, alt, techStack, style, preview } = props;
  return (
    <div className="project" style={style}>
      <h3 className="project-title">{title}</h3>
      {src ? (
        <div className="project-image-wrapper">
          <img className="project-image" src={src} alt={alt} />
        </div>
      ) : (
        <p className="project-placeholder">No Preview available</p>
      )}

      <div className="project-button-wrapper">
        {preview && <Button label="Preview" />}
        <Button label="Github" />
      </div>
      <div className="project-tech-stack">
        {techStack?.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
