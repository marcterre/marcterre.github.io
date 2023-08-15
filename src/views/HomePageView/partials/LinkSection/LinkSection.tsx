import { Section } from "../../../../components";
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
      label: "Email",
      route: "mailto:marc.terre@outlook.de",
    },
  ];
  return (
    <Section id="link">
      <Navigation navigationItems={navigationItems} />
    </Section>
  );
};

export default LinkSection;
