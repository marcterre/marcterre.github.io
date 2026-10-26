import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "my-app",
  description: "Portfolio site powered by Next.js and styled-components",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
