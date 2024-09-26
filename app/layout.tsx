import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "@/components/layout/Footer";

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
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-16 font-jetbrains w-screen h-screen `}
      >
        <div className="p-8 border border-[#f0f0f0] w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
