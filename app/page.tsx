import MainSection from "@/components/MainSection";
import { getProjects } from "@/lib/notion";

export default async function Home() {
  const projects = await getProjects();

  return <MainSection projects={projects} />;
}
