import "./Header.css";
import SvgIcon from "../../SVGIcon";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { name: "home", link: "#home" },
    { name: "about me", link: "#about" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <header className="header">
      {openMenu && (
        <nav className="navigation">
          <ul className="link-list">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <button
        className="button"
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? (
          <SvgIcon variant="menu" width="30" height="30" />
        ) : (
          <SvgIcon variant="menuOpen" width="30" height="30" />
        )}
      </button>
    </header>
  );
}
