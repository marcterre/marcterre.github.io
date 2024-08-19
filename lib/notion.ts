import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function getAboutSection() {
  const databaseId = process.env.NOTION_DB_ID_ABOUT_ME as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    title: response.results[0].properties.name.title[0].text.content,
    description:
      response.results[0].properties.description.rich_text[0].text.content,
    linkedin: response.results[0].properties.linkedin.url,
    github: response.results[0].properties.github.url,
  };
}

export async function getProjects() {
  const databaseId = process.env.NOTION_DB_ID_PROJECTS as string;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties.name.title[0].text.content,
      description: page.properties.description.rich_text[0].text.content,
      techStack: page.properties.tech_stack.multi_select.map(
        (item) => item.name
      ),
      url: page.properties.url.url,
      isCurrentProject: page.properties.is_current_project.checkbox,
    };
  });
}
