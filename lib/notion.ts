import { Education, ProfessionalExperienceType, ProfileInfo } from "@/types";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function getProjects() {
  const databaseId = process.env.NOTION_DB_ID_PROJECTS as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties.name.title[0].text.content,
      description: page.properties.description?.rich_text[0]?.text.content,
      techStack: page.properties.tech_stack.multi_select.map(
        (item) => item.name
      ),
      url: page.properties.url.url,
      isCurrentProject: page.properties.is_current_project.checkbox,
    };
  });
}

export async function getProfileInfo(): Promise<ProfileInfo> {
  const databaseId = process.env.NOTION_DB_ID_CV as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    id: response.results[0].id,
    name: response.results[0].properties.name.title[0].plain_text,
    email: response.results[0].properties.email.email,
    avatar: response.results[0].properties.avatar.files[0].name,
    profession:
      response.results[0].properties.profession.rich_text[0].plain_text,
    linkedIn: response.results[0].properties.linkedin.url,
    github: response.results[0].properties.github.url,
    website: response.results[0].properties.website.url,
    place: response.results[0].properties.place.rich_text[0].plain_text,
    motivation:
      response.results[0].properties.motivation.rich_text[0].plain_text,
    skills: response.results[0].properties.skills.multi_select.map(
      (item) => item.name
    ),
    languages: response.results[0].properties.languages.multi_select.map(
      (item) => item.name
    ),
    availability: response.results[0].properties.availability.date?.start || "",
    salaryPreference:
      response.results[0].properties["salary preference"].number,
  };
}

export async function getProfessionalExperience(): Promise<
  ProfessionalExperienceType[]
> {
  const databaseId = process.env.NOTION_DB_ID_PROFFESIONAL_EXPERIENCE as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      company: page.properties.company.title[0].plain_text,
      profession: page.properties.profession.rich_text[0].plain_text,
      startDate: page.properties.period.date?.start || "",
      endDate: page.properties.period.date?.end || "",
      activities: page.properties.activities.multi_select.map(
        (item) => item.name
      ),
    } as ProfessionalExperienceType;
  });
}

export async function getEducation(): Promise<Education[]> {
  const databaseId = process.env.NOTION_DB_ID_EDUCATION as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      type: "Education",
      institute: page.properties.institute.title[0]?.plain_text,
      startDate: page.properties.period.date?.start,
      endDate: page.properties.period.date?.end,
      topics: page.properties.topics.multi_select.map((item) => item.name),
    };
  });
}
