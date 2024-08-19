import { getAboutSection } from "@/lib/notion";

export default async function Home() {
  const data = await getAboutSection();

  console.log("data", data);

  return (
    <>
      <main className="w-full h-full">
        <div>{data.title}</div>
      </main>
    </>
  );
}
