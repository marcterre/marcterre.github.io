import { formatDateToMonthYear } from "@/helper/formatDate";
import { ProfessionalExperienceType } from "@/types";
import { FunctionComponent } from "react";

type ProfessionalExperienceProps = {
  professionalExperience: ProfessionalExperienceType[];
};

const ProfessionalExperience: FunctionComponent<
  ProfessionalExperienceProps
> = ({ professionalExperience }) => {
  const sortedProfessionalExperience = professionalExperience.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  const getDate = (startDate: string, endDate: string) => {
    if (!endDate) {
      return "since " + formatDateToMonthYear(startDate);
    }
    return (
      formatDateToMonthYear(startDate) + " to " + formatDateToMonthYear(endDate)
    );
  };

  return (
    <section className="w-10/12">
      <h3 className="text-lg font-semibold mb-4">Professional Experience</h3>
      {sortedProfessionalExperience.map(
        (experience: ProfessionalExperienceType, index: number) => (
          <div key={index} className="mb-10 last:mb-0">
            <p className="text-sm mb-4">
              {getDate(experience.startDate, experience.endDate)}
            </p>
            <div className="px-8">
              <h4 className="text-lg font-medium">
                {experience.company.toUpperCase()}
              </h4>
              <h5 className="mb-4">{experience.profession}</h5>
              <ul className="list-disc list-inside mt-2">
                {experience.activities.map(
                  (activity: string, index: number) => (
                    <li key={index} className="text-sm leading-5">
                      {activity}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default ProfessionalExperience;
