import { getAboutSection, getProjects } from "@/lib/notion";
import Markdown from "react-markdown";
import Projects from "@/components/layout/Projects";

export default async function Home() {
  const data = await getAboutSection();
  const projects = await getProjects();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[30vh] flex items-center justify-center">
        <Markdown className="md:text-xl text-base p-2 text-center">
          {data.description}
        </Markdown>
      </div>
      <Projects projects={projects} />
    </div>
  );
}
