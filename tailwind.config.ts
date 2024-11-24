import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
      },
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
        "cyberpunk-radial-light":
          "radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 90%)",
        "cyberpunk-linear-light":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 100%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
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
              "0.05em 0 0 var(--red), -0.05em -0.025em 0 var(--green), 0.025em 0.05em 0 var(--blue)",
          },
          "14%": {
            textShadow:
              "0.05em 0 0 var(--red), -0.05em -0.025em 0 var(--green), 0.025em 0.05em 0 var(--blue)",
          },
          "15%": {
            textShadow:
              "-0.05em -0.025em 0 var(--red), 0.025em 0.025em 0 var(--green), -0.05em -0.05em 0 var(--blue)",
          },
          "49%": {
            textShadow:
              "-0.05em -0.025em 0 var(--red), 0.025em 0.025em 0 var(--green), -0.05em -0.05em 0 var(--blue)",
          },
          "50%": {
            textShadow:
              "0.025em 0.05em 0 var(--red), 0.05em 0 0 var(--green), 0 -0.05em 0 var(--blue)",
          },
          "99%": {
            textShadow:
              "0.025em 0.05em 0 var(--red), 0.05em 0 0 var(--green), 0 -0.05em 0 var(--blue)",
          },
          "100%": {
            textShadow:
              "-0.025em 0 0 var(--red), -0.025em -0.025em 0 var(--green), -0.025em -0.05em 0 var(--blue)",
          },
        },
      },
      animation: {
        scanline: "scanline 10s linear infinite",
        rotate3D: "rotate3D 7s linear infinite",
        glitch: "glitch 1s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
