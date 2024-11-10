import { FunctionComponent } from "react";
import {
  Education,
  ProfessionalExperienceType,
  ProfileInfo,
  Project,
} from "@/types";
import { Projects } from "../Projects";

type MainSectionProps = {
  projects?: Project[];
  profileInformation?: ProfileInfo;
  education?: Education[];
  professionalExperience?: ProfessionalExperienceType[];
};

const MainSection: FunctionComponent<MainSectionProps> = ({ projects }) => {
  return (
    <div className="grid gap-4 w-full h-[450px] md:h-full">
      <div className="relative md:max-h-[500px] max-h-[450px]">
        {projects && (
          <div className="grid justify-center align-center h-full">
            <Projects projects={projects} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
