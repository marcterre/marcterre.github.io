import { useState } from "react";
import CapstoneImage from "../../assets/pocketBuilderImage.png"
import "./Projects.css";

export default function Projects() {
  const [showDescription, setShowDescription] = useState(false);
  const currentProjects = [];

  const finishedProjects = [
    {
      name: "PocketBuilder",
      description:
        "This app is especially designed for all hobbyists and craftsmen who want to plan new projects and retrieve them at any time.",
      image: CapstoneImage,
      techStack: [
        "Next.js",
        "React",
        "Styled components",
        "Cloudinary",
        "Figma",
      ],
      codeLink: "https://github.com/marcterre/capstone-project",
      preview: "https://capstone-project-1zduxfvlc-marcterre.vercel.app/",
    },
  ];

  return (
    <>
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <p>this section is in progress...</p>
        {currentProjects && (
          <section>
            <h3>Currently working on</h3>
          </section>
        )}
        {finishedProjects && (
          <section>
            <h3>Finished projects</h3>
            <div className="project-wrapper">
              <ul className="project-list">
                {finishedProjects.map((project) => (
                  <li key={project.name} className="project-list-item">
                    <h4>{project.name}</h4>
                    <div className="image-wrapper" ><img
                      src={project.image}
                      alt="Not added yet"
                      className="project-image"
                    ></img></div>
                    <div className="button-link-wrapper" >
                    <button
                      type="button"
                      onClick={() => setShowDescription(!showDescription)}
                    >
                      {showDescription
                        ? "hide description"
                        : "read description"}
                    </button>
                    <div className="link-wrapper">
                     <a className="project-link link" href={project.codeLink}>
                       View the code on github</a>
                      <a className="project-link link" href={project.preview}>
                        View the preview in vercel
                      </a>
                      </div>
                    </div>
                    {showDescription && <p className="project-description" >{project.description}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
