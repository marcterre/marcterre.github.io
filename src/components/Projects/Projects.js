import { useState } from "react";
import CapstoneImage from "../../assets/pocketBuilderImage.png"
import SvgIcon from "../../SVGIcon";
import "./Projects.css";

export default function Projects() {
  const [showDescription, setShowDescription] = useState(false);
  const finishedProjects = [
    {
      name: "PocketBuilder",
      description:
        "This is my capstone project for the certification as web developmer. The app is especially designed for all hobbyists and craftsmen who want to plan new projects and retrieve them at any time.",
      image: CapstoneImage,
      techStack: [
        "Next.js",
        "React",
        "Cloudinary",
        "Figma",
        "Styled components",
      ],
      codeLink: "https://github.com/marcterre/capstone-project",
      preview: "https://capstone-project-1zduxfvlc-marcterre.vercel.app/",
    },
  ];

  return (
      <section className="projects" id="projects">
        <h2>My Projects</h2>
          <section>
            <div className="project-wrapper">
              <ul className="project-list">
                {finishedProjects.map((project) => (
                  <li key={project.name} className="project-list-item">
                    <h4>{project.name}</h4>
                   <div className="image-wrapper" ><img
                      src={project.image}
                      alt="Not added yet"
                      className="project-image"
                    ></img>
                   {showDescription && <p className="project-description" >{project.description}</p>}
                    </div>
                    <ul className="project-tech-list" >{project.techStack.map((tech) => (
                      <li key={tech} className="project-tech-list-item" >{tech}</li>
              ))}</ul>
                    <div className="button-link-wrapper" >
                    <button
                      type="button"
                      onClick={() => setShowDescription(!showDescription)}
                    >
                      {showDescription
                        ? "hide description"
                        : "read description"}
                    </button>
                     <a className="project-link link" href={project.codeLink}>
                     <SvgIcon variant="link" width="30" color="var(--color)"/> View the code on github </a>
                      <a className="project-link link" href={project.preview}>
                      <SvgIcon variant="link" width="30" color="var(--color)"/> View the preview in vercel
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
  );
}
