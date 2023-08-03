import "./ProjectDisplay.styles.scss";
import { Button } from "../../Inputs";

type ProjectDisplayType = {
	title?: string;
	src?: string;
	alt?: string;
	description?: string;
};

export const ProjectDisplay = (props: ProjectDisplayType) => {
	const { title, src, alt, description } = props;
	return (
		<div className="project">
			<div className="project-middle">
				<h3 className="project-title">{title}</h3>
				<p className="project-description">{description}</p>
				{src && <img className="project-image" src={src} alt={alt} />}
			</div>
			<div className="project-button-wrapper">
				<Button label="Preview" />
				<Button label="Github" />
			</div>
		</div>
	);
};

export default ProjectDisplay;
