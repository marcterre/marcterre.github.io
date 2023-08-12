import { Section } from "../../../../components";
import menSilhouette from "../../../../assets/images/men-silhouette.png";
import "./AboutSection.styles.scss";
import { StyledBox } from "../../../../components/Layout/StyledBox";

export const AboutSection = () => {
  return (
    <Section id="about">
      <StyledBox
      // subContent="Hello"
      // title="Transforming designs to inovate"
      // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
      />
      <div className="about-image-wrapper">
        <img className="about-image" src={menSilhouette} alt="men silhouette" />
      </div>
    </Section>
  );
};

export default AboutSection;
