import Link from "next/link";
import HeaderComponent from "../components/header/HeaderComponent";
import GithubIcon from "../public/assets/github.svg";
import LinkedinIcon from "../public/assets/linkedin.svg";

export default function Home() {
  type SocialMedaLinkType = {
    name: string;
    url: string;
  };

  const socialMediaLinks: SocialMedaLinkType[] = [
    {
      name: "GitHub",
      url: "https://github.com/marcterre",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/marcterre/",
    },
  ];

  const getSocialMediaIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return <GithubIcon />;
      case "LinkedIn":
        return <LinkedinIcon />;
      default:
        return <GithubIcon />;
    }
  };

  return (
    <main className="w-full h-full">
      <HeaderComponent title="Marc Terre" />
      <div className="w-full h-full grid justify-items-center">
        <div className="sm:py-20 py-16 grid gap-10">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perferendis ex voluptatem, quidem consequuntur laborum et pariatur
            sit officiis distinctio quisquam id nam eos dolor totam iure
            incidunt, alias vel.
          </p>
          <div className="border-t border-softGrey30 w-20 mx-auto" />
          <div className="w-full grid gap-3">
            <h2 className="text-softGrey70">Connect with me on</h2>
            <ul className="flex gap-2">
              {socialMediaLinks.map((link) => {
                const { name, url } = link;

                return (
                  <li key={name} className="px-1">
                    <Link
                      className="flex gap-1 text-white"
                      href={url}
                      target="_blank"
                    >
                      {getSocialMediaIcon(name)}
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
