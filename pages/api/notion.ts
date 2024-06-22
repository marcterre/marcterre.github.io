import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET;
const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(!notionSecret || !databaseId) throw new Error('Notion secret or database ID is not set');

  try {
    const query = await notion.databases.query({
      database_id: databaseId,
    });

    console.log(query)
    res.status(200).json(query.results);
  } catch (error) {
    console.error("Failed to fetch data from Notion API:", error);
    res.status(500).json({ error: "Failed to fetch data from Notion API" });
  }
};
