import { NavigationBorder } from "@/components/layout/NavigationBorder";


export default function Home() {
  const navLinks = [
    { name: "Cyberspace", slug: "" },
    { name: "About", slug: "about" },
    { name: "Projects", slug: "projects" },
    { name: "Contact", slug: "contact" },
  ];
  

  return <NavigationBorder navLinks={navLinks}  />;
}