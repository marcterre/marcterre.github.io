import "./Footer.css";
import SvgIcon from "../../SVGIcon";

export const links = [
  {
    name: "linkedIn",
    svg: <SvgIcon variant="linkedIn" width="40" height="50" />,
    link: "https://www.linkedin.com/in/marcterre/",
  },
  {
    name: "github",
    svg: <SvgIcon variant="github" width="40" height="50" />,
    link: "https://github.com/marcterre",
  },
];

export default function Footer() {
  return (
    <ul className="link">
      <li> follow me </li>
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.link}>{link.svg}</a>
        </li>
      ))}
    </ul>
  );
}
