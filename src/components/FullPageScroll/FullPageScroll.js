import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

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
