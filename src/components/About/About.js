import "./About.css";
import SvgIcon from "../../SVGIcon";

export default function About() {
	const techStack = [
		"JavaScript",
		"HTML5",
		"CSS3",
		"React",
		"Next.js",
		"Node.js",
		"VS Code",
		"npm",
		"MongoDB",
		"git",
		"shell",
		"GitHub",
		"Jotai",
	];

	const hobbies = [
		{
			name: "cooking",
			icon: <SvgIcon variant="cooking" width="30" color="var(--color)" />,
		},
		{
			name: "reading",
			icon: <SvgIcon variant="reading" width="30" color="var(--color)" />,
		},
		{
			name: "movies",
			icon: <SvgIcon variant="movies" width="30" color="var(--color)" />,
		},
		{
			name: "gaming",
			icon: <SvgIcon variant="gaming" width="30" color="var(--color)" />,
		},
	];

	return <section className="about" id="about"></section>;
}
