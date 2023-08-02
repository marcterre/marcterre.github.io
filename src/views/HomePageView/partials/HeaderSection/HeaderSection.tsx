import { Navigation } from "../../../../components/Utils/Navigation";
import "./HeaderSection.styles.scss";

export const HeaderSection = () => {
	const navigationItems = [
		{
			label: "Home",
			route: "#home",
		},
		{
			label: "Projects",
			route: "#projects",
		},
		{
			label: "Contact",
			route: "#contact",
		},
	];
	return (
		<header>
			<Navigation variant="home-section" navigationItems={navigationItems} />
		</header>
	);
};

export default HeaderSection;
