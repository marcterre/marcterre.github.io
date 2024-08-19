import { getProjects } from "@/lib/notion";

const Projects = async () => {
  const projects = await getProjects();
  return (
    <div>
      <h1>Projects</h1>
      <div className="grid gap-8 my-8">
        {projects.map((project) => (
          <div key={project.id} className="border-solid border-2 p-8">
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <ul>
              {project.techStack.map((stack: string) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
