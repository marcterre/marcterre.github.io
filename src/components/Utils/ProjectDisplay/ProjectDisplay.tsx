import "./ProjectDisplay.styles.scss";
import { Button } from "../../Inputs";

type ProjectDisplayType = {
	title?: string;
	src?: string;
	alt?: string;
	techStack?: string[];
	style?: React.CSSProperties;
};

export const ProjectDisplay = (props: ProjectDisplayType) => {
	const { title, src, alt, techStack, style } = props;
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

			{src && (
				<div className="project-button-wrapper">
					<Button label="Preview" />
					<Button label="Github" />
				</div>
			)}
			<div className="project-tech-stack">
				{techStack?.map((tech) => (
					<p>{tech}</p>
				))}
			</div>
		</div>
	);
};

export default ProjectDisplay;
