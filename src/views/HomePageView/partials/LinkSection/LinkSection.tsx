import { Section } from "../../../../components";
import { Navigation, SvgIcon } from "../../../../components/Utils";

export const LinkSection = () => {
  const navigationItems = [
    {
      label: "LinkedIn",
      route: "https://www.linkedin.com/in/marcterre/",
      icon: <SvgIcon variant="linkedin" width={25} color="rgb(68, 170, 214)" />,
    },
    {
      label: "Github",
      route: "https://github.com/marcterre",
      icon: <SvgIcon variant="github" width={25} color="rgb(68, 170, 214)" />,
    },
    {
      label: "Email",
      route: "mailto:marc.terre@outlook.de",
      icon: <SvgIcon variant="email" width={25} color="rgb(68, 170, 214)" />,
    },
  ];
  return (
    <Section id="link">
      <Navigation navigationItems={navigationItems} />
    </Section>
  );
};

export default LinkSection;
