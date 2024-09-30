import { Projects } from "@/components/Projects";
import { getProjects } from "@/lib/notion";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Projects projects={projects} />
    </>
  );
}
