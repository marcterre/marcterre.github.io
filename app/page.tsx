import AboutMeComponent from "./components/homepage/AboutMeComponen";
import ProjectsComponent from "./components/homepage/ProjectsComponent";

export default function Home() {
  return (
    <main className="sm:flex w-screen h-screen">
      <AboutMeComponent />
      <ProjectsComponent />
    </main>
  );
}
