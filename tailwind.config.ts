import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pinkShell: "#FE899D",
    },
    extend: {
      borderWidth: {
        "3": "3px",
      },
      keyframes: {
        rotate3D: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        rotate3D: "rotate3D 7s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
