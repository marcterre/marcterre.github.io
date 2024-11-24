import "./globals.css";
import React from "react";
import {
  AnimatedBackground,
  Header,
  Footer,
  Navigation,
} from "@/components/Layout";
import { Metadata } from "next";
import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marc Terre - Frontend Developer",
  description: "Marc's Portfolio",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${jetBrainsMono.className} font-jetbrains w-screen h-screen text-pink-500 overflow-hidden`}
      >
        <AnimatedBackground>
          <Header />
          <main className="w-full h-full relative z-10 flex items-center mb-6">
            <div className="md:flex w-full">
              <Navigation />
              {children}
            </div>
          </main>
          <Footer />
        </AnimatedBackground>
      </body>
    </html>
  );
}
