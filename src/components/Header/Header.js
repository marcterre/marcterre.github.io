import "./Header.css";

export default function Header() {
  const links = [
    { name: "about me", link: "about" },
    { name: "projects", link: "projects" },
    { name: "contact", link: "contact" },
  ];

  return (
    <header>
      <nav className="navigation">
        <ul className="link-list">
          {links.map((link) => (
            <li key={link.name} className="link-list-item">
              <a href={link.link} className="link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
