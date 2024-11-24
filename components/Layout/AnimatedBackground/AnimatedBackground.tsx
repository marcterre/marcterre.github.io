"use client";
import { useTheme } from "next-themes";
import AnimatedBackgroundLight from "./AnimatedBackgroundLight";
import AnimatedBackgroundDark from "./AnimatedBackgroundDark";
import { FunctionComponent } from "react";

type AnimatedBackgroundProps = {
  children: React.ReactNode;
};

const AnimatedBackground: FunctionComponent<AnimatedBackgroundProps> = ({
  children,
}) => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <AnimatedBackgroundLight>{children}</AnimatedBackgroundLight>
      ) : (
        <AnimatedBackgroundDark>{children}</AnimatedBackgroundDark>
      )}
    </>
  );
};
export { AnimatedBackground };
