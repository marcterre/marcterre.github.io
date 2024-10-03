import { FunctionComponent } from "react";
import LinkComponent from "../Link";
import { Copy, ExternalLink, MapPin } from "lucide-react";
import Avatar from "./Avatar";

type CVHeaderProps = {
  email: string;
  github: string;
  linkedIn: string;
  avatar: string;
  place: string;
};

const CVHeader: FunctionComponent<CVHeaderProps> = ({
  email,
  github,
  linkedIn,
  avatar,
  place,
}) => {
  const copyText = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <section className="md:w-10/12 w-11/12 md:flex grid justify-between">
      <div className="mb-6 md:grid hidden">
        <p
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => copyText(email)}
        >
          {email}
          <Copy size={12} />
        </p>
        <LinkComponent url={github} icon={<ExternalLink size={12} />} />
        <LinkComponent url={linkedIn} icon={<ExternalLink size={12} />} />
      </div>
      <div className="grid gap-4">
        <Avatar size="md" src={avatar} />
        <span className="flex items-center gap-2 mb-6 md:mb-0">
          <MapPin size={16} />
          {place}
        </span>
      </div>
      <div className="grid md:hidden gap-4">
        <p
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => copyText(email)}
        >
          {email}
          <Copy size={12} />
        </p>
        <LinkComponent url={github} icon={<ExternalLink size={12} />} />
        <LinkComponent url={linkedIn} icon={<ExternalLink size={12} />} />
      </div>
    </section>
  );
};

export default CVHeader;
