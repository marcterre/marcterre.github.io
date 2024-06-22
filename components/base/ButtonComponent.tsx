// pages/index.tsx

import { Client } from "@notionhq/client";
import { GetStaticProps } from "next";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

// Fetch data on the server side
export const getStaticProps: GetStaticProps = async () => {
  const notionSecret = process.env.NOTION_SECRET;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionSecret || !databaseId) {
    return {
      props: {
        data: null,
        error: "Notion secret or database id not provided",
      },
    };
  }

  const notion = new Client({ auth: notionSecret });

  try {
    const query = await notion.databases.query({
      database_id: databaseId,
    });

    return {
      props: {
        data: query.results,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data from Notion API:", error);
    return {
      props: {
        data: null,
        error: "Failed to fetch data from Notion API",
      },
    };
  }
};

// ButtonComponentProps Type Definition
type ButtonComponentProps = {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
  data?: any;
};

// ButtonComponent Definition
export const ButtonComponent = ({
  className,
  label,
  icon,
  type,
  handleClick,
  data,
}: ButtonComponentProps) => {
  console.log(data);

  return (
    <button
      type={type ? type : "button"}
      className={className ? className : ""}
      onClick={handleClick}
    >
      {data.map(
        (item: {
          id: Key | null | undefined;
          properties: {
            Name: {
              title: {
                plain_text:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
              }[];
            };
            Description: {
              rich_text: {
                plain_text:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
              }[];
            };
          };
        }) => (
          <div key={item.id}>
            <h1>{item.properties.Name.title[0].plain_text}</h1>
            <p>{item.properties.Description.rich_text[0].plain_text}</p>
          </div>
        )
      )}
    </button>
  );
};
