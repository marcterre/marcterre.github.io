import menSilhouette from "../../../../assets/images/men-silhouette.png";
import "./AboutSection.styles.scss";
import { Section } from "../../../../components/Layout";
import { StyledSign } from "../../../../components/Layout/StyledSign";
import { StripeBox } from "../../../../components/Layout/StripeBox";

export const AboutSection = () => {
  return (
    <Section id="about">
      <StripeBox
        children={<StyledSign content="Marc Terre" />}
        subContent="Frontend Developer"
        description="Welcome! I'm a self-taught frontend developer driven by curiosity. I bring ideas to life and primarily develop web applications. My biggest passion is exploring the whole world of programming!"
      />
      <div className="about-image-wrapper">
        <img className="about-image" src={menSilhouette} alt="men silhouette" />
      </div>
    </Section>
  );
};

export default AboutSection;
