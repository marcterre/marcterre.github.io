import { FunctionComponent } from "react";

type SkillsProps = {
  skills: string[];
};

const Skills: FunctionComponent<SkillsProps> = ({ skills }) => {
  return (
    <section className="w-10/12">
      <h2 className="font-semibold mb-4 text-lg">Skills</h2>
      <ul className="flex flex-wrap gap-2 list-none p-0">
        {skills.map((skill, index) => (
          <li key={index} className="pr-4 py-1 rounded-md">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
