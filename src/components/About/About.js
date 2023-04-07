import "./About.css";
import SvgIcon from "../../SVGIcon";

export default function About() {
  const techStack = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Node.js",
    "VS Code",
    "npm",
    "MongoDB",
    "git",
    "shell",
    "GitHub",
    "Jotai",
  ];

  const hobbies = [
    {
      name: "cooking",
      icon: <SvgIcon variant="cooking" width="30" color="var(--color)" />,
    },
    {
      name: "reading",
      icon: <SvgIcon variant="reading" width="30" color="var(--color)" />,
    },
    {
      name: "movies",
      icon: <SvgIcon variant="movies" width="30" color="var(--color)" />,
    },
    {
      name: "gaming",
      icon: <SvgIcon variant="gaming" width="30" color="var(--color)" />,
    },
  ];

  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <article>
        I live in my self converted camper always looking for a new adventure.
        One of my biggest dreams - a road trip through Norway.
        <br />
        <br />
        Programming got me hooked during lockdown and i enjoy using my
        potential. My passion is to create things and there is nothing better
        than creating dynamic code and responsive websites.
      </article>
      <section>
        <h3>Things i learned and use:</h3>
        <ul className="tech-list">
          {techStack.map((techs) => (
            <li key={techs} className="tech-list-item">
              {techs}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Other stuff i like:</h3>
        <ul className="hobby-list">
          {hobbies.map((hobby) => (
            <li key={hobby.name}>{hobby.icon}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
