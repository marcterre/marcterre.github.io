import { Navigation } from "../../../../components/Navigation";
import "./HeaderSection.styles.scss";

export const HeaderSection = () => {
  const navigationItems = [
    {
      label: "Projects",
      route: "#projects",
    },
    {
      label: "About me",
      route: "#about",
    },
    {
      label: "Contact",
      route: "#contact",
    },
  ];
  return (
    <header>
      <div className="header-section-navigation-container">
        <Navigation variant="home-section" navigationItems={navigationItems} />
        <div className="header-section-slogan">
          <p className="slogan">
            Transforming <span className="slogan--span">design</span>s into{" "}
            engaging <span className="slogan--span">experience</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
