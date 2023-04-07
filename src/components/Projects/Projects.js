import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [showDescription, setShowDescription] = useState(false);
  const currentProjects = [];

  const finishedProjects = [
    {
      name: "PocketBuilder",
      description:
        "This app is especially designed for all hobbyists and craftsmen who want to plan new projects and retrieve them at any time",
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
                    <button
                      type="button"
                      onClick={() => setShowDescription(!showDescription)}
                    >
                      {showDescription
                        ? "hide description"
                        : "read description"}
                    </button>
                    {showDescription && <p>{project.description}</p>}
                    <div className="link-wrapper">
                      <a className="link" href={project.codeLink}>
                        code
                      </a>
                      <a className="link" href={project.preview}>
                        preview
                      </a>
                    </div>
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
