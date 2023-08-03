import { Navigation } from "../../../../components/Utils/Navigation";
import "./HeaderSection.styles.scss";

export const HeaderSection = () => {
	const navigationItems = [
		{
			label: "LinkedIn",
			route: "https://www.linkedin.com/in/marcterre/",
		},
		{
			label: "Github",
			route: "https://github.com/marcterre",
		},
		{
			label: "Contact",
			route: "mailto:marc.terre@outlook.de",
		},
	];
	return (
		<header>
			<Navigation variant="home-section" navigationItems={navigationItems} />
		</header>
	);
};

export default HeaderSection;
