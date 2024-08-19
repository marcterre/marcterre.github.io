import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marc Terre - Frontend Developer",
  description: "Marc's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} sm:my-6 my-4 mx-auto max-w-screen-sm font-jetbrains`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
