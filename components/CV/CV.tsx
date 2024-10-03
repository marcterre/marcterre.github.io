"use client";
import React, { FunctionComponent } from "react";
import Divider from "./Divider";
import { Education, ProfessionalExperienceType, ProfileInfo } from "@/types";
import { Download } from "lucide-react";
import CVHeader from "./CVHeader";
import Skills from "./Skills";
import ProfessionalExperience from "./ProfessionalExperience";

type CVProps = {
  profileInformation: ProfileInfo;
  education: Education[];
  professionalExperience: ProfessionalExperienceType[];
};

const CV: FunctionComponent<CVProps> = ({
  profileInformation,
  professionalExperience,
  education,
}) => {
  const { avatar, email, github, linkedIn, place, profession, skills } =
    profileInformation;

  const downloadPDF = () => {};

  return (
    <>
      <div className="bg-black bg-opacity-40 md:bg-transparent relative w-full max-w-4xl py-8 px-2 grid justify-items-center overflow-y-scroll hover:bg-black hover:bg-opacity-40 transition-colors duration-1000 ease-in-out">
        <CVHeader
          email={email}
          github={github}
          linkedIn={linkedIn}
          avatar={avatar}
          place={place}
        />
        <Divider />
        <Skills skills={skills} />
        <Divider />
        <ProfessionalExperience
          professionalExperience={professionalExperience}
        />
        {/* <Divider /> */}
        {/* <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {education.map((education: Education, index: number) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-medium">{education.institute}</h4>
              <p className="text-sm text-muted-foreground">
                {education.startDate} - {education.endDate}
              </p>
              {education.topics.map((topic: string, index: number) => (
                <span key={index} className="text-sm text-muted-foreground">
                  {topic}
                </span>
              ))}
            </div>
          ))}
        </section> */}
        {/* <button
          className="fixed bottom-[13rem] right-[15rem]"
          onClick={downloadPDF}
        >
          <Download size={24} />
        </button> */}
      </div>
    </>
  );
};

export default CV;
