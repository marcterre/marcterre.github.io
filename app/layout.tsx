import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { AnimatedBackground, Footer, Header } from "@/components/Layout";

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
        className={`${inter.className} font-jetbrains w-screen h-screen text-pink-500 overflow-hidden`}
      >
        <AnimatedBackground>
          <Header />
          {children}
          <Footer />
        </AnimatedBackground>
      </body>
    </html>
  );
}
