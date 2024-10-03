import MainSection from "@/components/MainSection";
import {
  getEducation,
  getProfessionalExperience,
  getProfileInfo,
} from "@/lib/notion";

export default async function Home() {
  const profileInformation = await getProfileInfo();
  const professionalExperience = await getProfessionalExperience();
  const education = await getEducation();

  return (
    <MainSection
      education={education}
      professionalExperience={professionalExperience}
      profileInformation={profileInformation}
    />
  );
}
