import "./Home.css";
import { links } from "../Footer/Footer";

export default function Home() {
  return (
    <main className="main" id="home">
      <div className="titleWrapper">
        <h1 className="heading title">Marc Terre</h1>
        <h2 className="heading subTitle">Web Developer</h2>
      </div>
      <div>
        <ul className="linkList">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.svg}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
