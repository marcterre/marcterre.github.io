import Link from "next/link";
import GithubIcon from "../public/assets/github.svg";
import LinkedinIcon from "../public/assets/linkedin.svg";
import LinkComponent from "@/components/base/LinkComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";

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
    <>
      <main className="w-full h-full">
        <HeaderComponent title="Marc Terre" />
        <div className="max-w-md sm:mx-auto h-full grid justify-items-center">
          <div className=" sm:py-10 py-10 grid gap-10">
            <div className="grid gap-5 ">
              <p>Hi, i am Marc Terre, a passionate Frontend Developer.</p>
              <div>
                Currently working on several projects you can find on my{" "}
                <Link href="/projects" className="text-white">
                  projects section
                </Link>
                .
              </div>
              <p>
                It was a year of a pandemic that changed my world. Seeking new
                challenges, I decided to learn how to code and discovered the
                endless possibilities it offered for creativity and
                problem-solving. Coding has become my passion and I am excited
                to continue learning and growing in this field.
              </p>
              <p>
                You are interested in working with me? Feel free to contact me.
              </p>
              <p>
                You want to make coding your profession but don't know where to
                start? Feel free to contact me as well, i'll help where i can.
              </p>
            </div>
            <div className="border-t border-softGrey30 w-80 mx-auto" />
            <div className="w-full grid gap-3">
              <h2 className="text-softGrey70">Connect with me on</h2>
              <ul className="flex gap-2">
                {socialMediaLinks.map((link) => {
                  const { name, url } = link;

                  return (
                    <li key={name} className="px-1">
                      <LinkComponent
                        name={name}
                        hasIcon={true}
                        icon={getSocialMediaIcon(name)}
                        url={url}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent customClass="max-w-md " />
    </>
  );
}
