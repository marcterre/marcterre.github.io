import { Navigation } from "../../../../components/Utils/Navigation";

export const LinkSection = () => {
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
  return <Navigation navigationItems={navigationItems} />;
};

export default LinkSection;
