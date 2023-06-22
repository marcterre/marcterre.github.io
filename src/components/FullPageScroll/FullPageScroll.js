import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../../views/HomePageView/partials/ProjectSection/ProjectSection";
import Contact from "../../views/HomePageView/partials/ContactSection/ContactSection";

export default function FullPageScroll() {
	return (
		<>
			<Fullpage>
				<FullPageSections>
					<FullpageSection>
						<Home />
					</FullpageSection>
					<FullpageSection>
						<About />
					</FullpageSection>
					<FullpageSection>
						<Projects />
					</FullpageSection>
					<FullpageSection>
						<Contact />
					</FullpageSection>
				</FullPageSections>
			</Fullpage>
		</>
	);
}
