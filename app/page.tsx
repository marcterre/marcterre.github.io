import { Projects } from "@/components/Projects";

export default async function Home() {
  return (
    <div className="grid gap-4 w-full h-[450px] md:h-full">
      <div className="relative md:max-h-[500px] max-h-[450px]">
        <div className="grid justify-center align-center h-full">
          <Projects />
        </div>
      </div>
    </div>
  );
}
