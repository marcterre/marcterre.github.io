import { Linkedin, Github, FileText } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/marcterre/"
          className="text-pink-500 hover:text-pink-300 transition-colors duration-300"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/marcterre"
          className="text-pink-500 hover:text-pink-300 transition-colors duration-300"
        >
          <Github size={24} />
        </Link>
      </div>
      <Link
        target="_blank"
        href="/cv.pdf"
        className="flex items-center space-x-2 text-pink-500 hover:text-pink-300 transition-colors duration-300"
      >
        <FileText size={24} />
        <span>CV</span>
      </Link>
    </footer>
  );
};

export default Footer;
