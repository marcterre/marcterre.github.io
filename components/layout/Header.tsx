import Link from "next/link";
import { FunctionComponent } from "react";

type HeaderProps = {
  linkedin: string;
  github: string;
};

const Header: FunctionComponent<HeaderProps> = ({ linkedin, github }) => {
  return (
    <div className="flex w-full gap-3">
      <Link
        href={linkedin}
        target="_blank"
        className="hover:text-white hover:underline text-sm  md:text-base"
      >
        Marc Terre
      </Link>
      <div>/</div>
      <Link
        href={github}
        target="_blank"
        className="hover:text-white hover:underline text-sm  md:text-base"
      >
        Web Developer
      </Link>
    </div>
  );
};

export default Header;
