import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/layout/Header";
import { getAboutSection } from "@/lib/notion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marc Terre - Frontend Developer",
  description: "Marc's Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getAboutSection();

  return (
    <html lang="en">
      <body
        className={`${inter.className} p-4 md:p-2 font-jetbrains mx-auto max-w-screen-sm h-screen overflow-hidden`}
      >
        <Header linkedin={data.linkedin} github={data.github} />
        {children}
      </body>
    </html>
  );
}
