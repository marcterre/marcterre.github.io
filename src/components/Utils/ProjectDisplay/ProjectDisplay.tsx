import "./ProjectDisplay.styles.scss";
import { Button } from "../../Inputs";

type ProjectDisplayType = {
  title?: string;
  src?: string;
  alt?: string;
  techStack?: string[];
  style?: React.CSSProperties;
  preview?: boolean;
  description?: string;
};

export const ProjectDisplay = (props: ProjectDisplayType) => {
  const { title, src, alt, techStack, style, preview, description } = props;
  return (
    <div className="project" style={style}>
      <div className="project-heading">
        <h3 className="project-title">{title}</h3>
        {description && <p className="project-description">{description}</p>}
      </div>
      <div className="project-container">
        {src ? (
          <div className="project-image-wrapper">
            <img className="project-image" src={src} alt={alt} />
          </div>
        ) : (
          <p className="project-placeholder">No Preview available</p>
        )}
      </div>
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
