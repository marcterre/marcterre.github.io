import { Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="fixed bottom-8 px-8 left-0 z-10 flex w-full justify-between items-center">
      <div className="flex space-x-4">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/marcterre/"
          className="py-2 text-pink-500 hover:bg-pink-900/30 transition-colors duration-300"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/marcterre"
          className="py-2 text-pink-500 hover:bg-pink-900/30 transition-colors duration-300"
        >
          <Github size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
