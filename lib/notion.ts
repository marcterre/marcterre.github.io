import {
  Education,
  NotionMultiSelect,
  NotionPage,
  ProfessionalExperienceType,
  ProfileInfo,
  Project,
} from "@/types";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function getProjects(): Promise<Project[]> {
  const databaseId = process.env.NOTION_DB_ID_PROJECTS as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => {
    const properties = (page as NotionPage).properties;
    return {
      id: page.id,
      title: properties.name.title[0].text.content,
      description: properties.description?.rich_text[0]?.text.content,
      techStack: properties.tech_stack.multi_select.map(
        (item: NotionMultiSelect) => item.name
      ),
      url: properties.url.url,
      isCurrentProject: properties.is_current_project.checkbox,
    };
  });
}

export async function getProfileInfo(): Promise<ProfileInfo> {
  const databaseId = process.env.NOTION_DB_ID_CV as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const properties = (response.results[0] as NotionPage).properties;

  return {
    id: response.results[0].id,
    name: properties.name.title[0].plain_text,
    email: properties.email.email,
    avatar: properties.avatar.files[0].name,
    profession: properties.profession.rich_text[0].plain_text,
    linkedIn: properties.linkedin.url,
    github: properties.github.url,
    website: properties.website.url,
    place: properties.place.rich_text[0].plain_text,
    motivation: properties.motivation.rich_text[0].plain_text,
    skills: properties.skills.multi_select.map(
      (item: NotionMultiSelect) => item.name
    ),
    languages: properties.languages.multi_select.map(
      (item: NotionMultiSelect) => item.name
    ),
    availability: properties.availability.date?.start || "",
    salaryPreference: properties["salary preference"].number,
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
    const properties = (page as NotionPage).properties;
    return {
      id: page.id,
      company: properties.company.title[0].plain_text,
      profession: properties.profession.rich_text[0].plain_text,
      startDate: properties.period.date?.start || "",
      endDate: properties.period.date?.end || "",
      activities: properties.activities.multi_select.map(
        (item: NotionMultiSelect) => item.name
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
    const properties = (page as NotionPage).properties;
    return {
      id: page.id,
      type: "Education",
      institute: properties.institute.title[0]?.plain_text,
      startDate: properties.period.date?.start,
      endDate: properties.period.date?.end,
      topics: properties.topics.multi_select.map(
        (item: NotionMultiSelect) => item.name
      ),
    };
  });
}
