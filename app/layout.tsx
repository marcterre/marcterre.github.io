import "./globals.css";
import React from "react";
import { Header, Footer, Navigation } from "@/components/Layout";
import { Metadata } from "next";
import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import AnimatedBackgroundDark from "@/components/Layout/AnimatedBackground/AnimatedBackgroundDark";

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
        className={`${jetBrainsMono.className}  w-screen h-screen overflow-hidden`}
      >
        <ThemeProvider>
          <AnimatedBackgroundDark>
            <Header />
            <main className="w-full h-full relative z-10 flex items-center mb-6">
              <div className="md:flex w-full">
                <Navigation />
                {children}
              </div>
            </main>
            <Footer />
          </AnimatedBackgroundDark>
        </ThemeProvider>
      </body>
    </html>
  );
}
