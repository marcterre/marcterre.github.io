import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrainsMonoRegular", "monospace"],
      },
      backgroundSize: {
        scanline: "100% 4px",
      },
      backgroundImage: {
        "cyberpunk-radial":
          "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
        "cyberpunk-linear":
          "linear-gradient(to bottom, transparent 50%, rgba(255, 0, 255, 0.05) 50%)",
      },
      keyframes: {
        scanline: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
        rotate3D: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        glitch: {
          "0%": {
            textShadow:
              "0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
          },
          "14%": {
            textShadow:
              "0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
          },
          "15%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
          },
          "49%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
          },
          "50%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)",
          },
          "99%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)",
          },
          "100%": {
            textShadow:
              "-0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75)",
          },
        },
      },
      animation: {
        scanline: "scanline 10s linear infinite",
        rotate3D: "rotate3D 7s linear infinite",
        glitch: "glitch 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
