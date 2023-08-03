import "./ProjectSection.styles.scss";
import { Section, GridContainer } from "../../../../components";
import Carousel from "../../../../components/Utils/Carousel/Carousel";

export const ProjectSection = () => {
	// const finishedProjects = [
	// 	{
	// 		name: "PocketBuilder",
	// 		description:
	// 			"This is my capstone project for the certification as web developer. The app is especially designed for all hobbyists and craftsmen who want to plan new projects and retrieve them at any time.",
	// 		image: CapstoneImage,
	// 		techStack: ["Next.js", "React", "Cloudinary", "Figma", "Styled components"],
	// 		codeLink: "https://github.com/marcterre/capstone-project",
	// 		preview: "https://capstone-project-1zduxfvlc-marcterre.vercel.app/",
	// 	},
	/* {name: "Weather and Activity App",
  description: "You want to have an overview of your activities and want to know when its the best weather to do it? Just add your activity.",
image: "",
techStack: ["React"],
codeLink: "https://github.com/marcterre/weather-and-activity-app",
preview: ""}
  
  */
	// ];

	const projects = [
		{
			title: "Project",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			src: "https://picsum.photos/200/300",
			alt: "alkfjlas",
		},
		{
			title: "Project",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			src: "https://picsum.photos/200/300",
			alt: "alkfjlas",
		},
		{
			title: "Project",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			src: "https://picsum.photos/200/300",
			alt: "alkfjlas",
		},
	];

	return (
		<Section id="projects">
			{/* <div className="project-section">
				<h2 className="project-section-title">Projects</h2>
			</div> */}
			<GridContainer columns={1}>
				<Carousel items={projects} />
			</GridContainer>
		</Section>
	);
};
