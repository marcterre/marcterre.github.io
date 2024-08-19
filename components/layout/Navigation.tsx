import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full my-8">
      <ul className="flex gap-8 justify-end text-end">
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
