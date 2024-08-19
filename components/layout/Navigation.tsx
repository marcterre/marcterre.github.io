import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full">
      <ul className="flex gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
