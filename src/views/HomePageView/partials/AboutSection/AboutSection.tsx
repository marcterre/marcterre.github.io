import menSilhouette from "../../../../assets/images/men-silhouette.png";
import "./AboutSection.styles.scss";
import { StyledBox } from "../../../../components/Layout/StyledBox";
import { Section } from "../../../../components/Layout";
import { StyledSign } from "../../../../components/Layout/StyledSign";

export const AboutSection = () => {
  return (
    <Section id="about">
      <StyledBox
        children={<StyledSign content="Marc Terre" />}
        subContent="Frontend Developer"
        description="Welcome! I'm a self-taught frontend developer driven by curiosity. I bring ideas to life and primarily develop web applications. My biggest passion is exploring the whole world of programming! Follow me on this journey through the realm of code."
      />
      <div className="about-image-wrapper">
        <img className="about-image" src={menSilhouette} alt="men silhouette" />
      </div>
    </Section>
  );
};

export default AboutSection;
