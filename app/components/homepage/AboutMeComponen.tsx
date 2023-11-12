import GithubIcon from "../../assets/github.svg"
import LinkedinIcon from "../../assets/linkedin.svg"

const AboutMeComponent = function () {
  return (
    <div className="border grid sm:w-1/2">
      <div className="my-auto text-center px-14">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          perferendis ex voluptatem, quidem consequuntur laborum et pariatur sit
          officiis distinctio quisquam id nam eos dolor totam iure incidunt,
          alias vel.
        </p>
        <div>
          <ul className="flex justify-evenly items-center">
            <li>Catch me here:</li>
            <li className="hover:animate-rotate3D">
              <a
                className=""
                href="https://github.com/marcterre"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
            </li>
            <li className="hover:animate-rotate3D">
              <a
                href="https://www.linkedin.com/in/marcterre/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
