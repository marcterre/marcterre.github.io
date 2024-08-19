import Link from "next/link";
import { FunctionComponent } from "react";
import LinkComponent from "../Link";

type HeaderProps = {
  linkedin: string;
  github: string;
};

const Header: FunctionComponent<HeaderProps> = ({ linkedin, github }) => {
  return (
    <div className="flex w-full gap-3">
      <LinkComponent name="Marc Terre" url={linkedin} />
      <div>/</div>
      <LinkComponent name="Web Developer" url={github} />
    </div>
  );
};

export default Header;
