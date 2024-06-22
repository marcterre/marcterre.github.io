// app/blog/[slug]/page.tsx

import { fetchPageBlocks, fetchPageBySlug } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { Client } from "@notionhq/client";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

// Ensure environment variables are set
const notionSecret = process.env.NOTION_SECRET;
const databaseId = process.env.NOTION_DATABASE_ID as string;

if (!notionSecret || !databaseId) {
  throw new Error('Notion secret or database ID is not set');
}

const notion = new Client({ auth: notionSecret });

// Ensure the database ID is a valid UUID
if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(databaseId)) {
  throw new Error(`Invalid database ID: ${databaseId}`);
}

async function fetchAllSlugs() {
  const response = await notion.databases.query({ database_id: databaseId });

  // Assuming your pages have a "slug" property in their properties
  return response.results.map((page) => page.properties.slug.rich_text[0].text.content);
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: 'Blog Post',
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const post = await fetchPageBySlug(slug);
  if (!post) notFound();

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));

  const html = await renderer.render(...blocks);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
