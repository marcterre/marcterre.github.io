import React from "react";
import "./Section.styles.scss";

type SectionType = {
  id: string;
  children: React.ReactNode;
};

export const Section = (props: SectionType) => {
  const { id, children } = props;
  return <section id={id}>{children}</section>;
};

export default Section;
