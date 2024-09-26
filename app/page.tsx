import Projects from "@/components/layout/Projects";
import { getProjects } from "@/lib/notion";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="w-full h-full">
      <div className="text-lg">
        <h1>Marc Terre</h1>
      </div>
      <div className="h-full flex justify-between py-6">
        <div className="w-1/2">something junge</div>
        <Projects projects={projects} />
      </div>
    </div>
  );
}
