import { Projects } from "@/components/Projects";
import { getProjects } from "@/lib/notion";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="w-full h-full relative z-10 flex-grow flex items-center justify-center">
      <Projects projects={projects} />
    </main>
  );
}
