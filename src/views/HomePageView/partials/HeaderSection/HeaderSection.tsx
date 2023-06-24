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
    <header className="header-section">
      <div className="header-section-navigation-container">
        <Navigation variant="home-section" navigationItems={navigationItems} />
      </div>
    </header>
  );
};

export default HeaderSection;
