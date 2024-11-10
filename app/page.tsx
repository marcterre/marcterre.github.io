import MainSection from "@/components/Layout/MainSection";
import { getProjects } from "@/lib/notion";

export default async function Home() {
  const projects = await getProjects();

  return <MainSection projects={projects} />;
}
