import { Section } from "../../../../components";
import mockProject from "../../../../assets/images/mock-project.jpeg";
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
			techStack: ["React", "Typescript", "Styled components"],
			src: mockProject,
			alt: "mockProject",
		},
		{
			title: "Project",
			techStack: ["React", "Typescript", "Styled components"],
		},
		{
			title: "Project",
			techStack: ["React", "Typescript", "Styled components"],
			src: mockProject,
			alt: "mockProject",
		},
		{
			title: "Project",
			techStack: ["React", "Typescript", "Styled components"],
			src: mockProject,
			alt: "mockProject",
		},
		{
			title: "Project",
			techStack: ["React", "Typescript", "Styled components"],
		},
		{
			title: "Project",
			techStack: [
				"React",
				"Typescript",
				"Styled components",
				"Scss",
				"Cypress",
				"Storybook",
			],
			src: mockProject,
			alt: "mockProject",
		},
	];

	return (
		<Section id="projects">
			<Carousel items={projects} carouselTitle="Projects" />
		</Section>
	);
};
