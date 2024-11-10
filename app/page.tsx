import { Projects } from "@/components/Projects";
import { getProjects } from "@/lib/notion";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="grid gap-4 w-full h-[450px] md:h-full">
      <div className="relative md:max-h-[500px] max-h-[450px]">
        {projects && (
          <div className="grid justify-center align-center h-full">
            <Projects projects={projects} />
          </div>
        )}
      </div>
    </div>
  );
}
