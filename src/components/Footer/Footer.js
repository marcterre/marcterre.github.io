import "./Footer.css";
import SvgIcon from "../../SVGIcon";

export default function Footer() {
  const list = [
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
  return (
    <ul className="list">
      <li> follow me </li>
      {list.map((listItem) => (
        <li key={listItem.name}>
          <a href={listItem.link}>{listItem.svg}</a>
        </li>
      ))}
    </ul>
  );
}
