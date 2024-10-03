import Link from "next/link";
import { FunctionComponent } from "react";

type LinkComponentProps = {
  url: string;
  icon?: JSX.Element;
};

const getLinkName = (url: string) => {
  switch (true) {
    case url.includes("github"):
      return "GitHub";
    case url.includes("linkedin"):
      return "LinkedIn";
    default:
      return "Website";
  }
};

const LinkComponent: FunctionComponent<LinkComponentProps> = ({
  url,
  icon,
}) => {
  return (
    <Link target="_blank" href={url} className="flex items-center gap-1">
      {getLinkName(url)}
      {icon && icon}
    </Link>
  );
};

export default LinkComponent;
