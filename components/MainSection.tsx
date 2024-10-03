"use client";
import { FunctionComponent, useState } from "react";
import { Projects } from "./Projects";
import {
  Education,
  ProfessionalExperienceType,
  ProfileInfo,
  Project,
} from "@/types";
import { CV } from "./CV";
import { usePathname } from "next/navigation";

type MainSectionProps = {
  projects?: Project[];
  profileInformation?: ProfileInfo;
  education?: Education[];
  professionalExperience?: ProfessionalExperienceType[];
};

const MainSection: FunctionComponent<MainSectionProps> = ({
  projects,
  education,
  professionalExperience,
  profileInformation,
}) => {
  const pathname = usePathname();

  return (
    <div className="grid gap-4 w-full  h-[450px]">
      <div className="relative md:max-h-[500px] max-h-[450px]">
        {pathname === "/cv" &&
        education &&
        professionalExperience &&
        profileInformation ? (
          <div className="grid justify-center align-center h-full">
            <CV
              education={education}
              professionalExperience={professionalExperience}
              profileInformation={profileInformation}
            />
          </div>
        ) : (
          projects && (
            <div className="grid justify-center align-center h-full">
              <Projects projects={projects} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MainSection;
