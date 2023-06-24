import { Navigation } from "../../../../components/Navigation";
import "./HeaderSection.styles.scss";

export const HeaderSection = () => {
  const navigationItems = [
    {
      label: "",
    },
  ];
  return (
    <header className="header">
      <Navigation listItems={navigationItems} />
    </header>
  );
};

export default HeaderSection;
