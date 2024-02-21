import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        linkBackgroundAnimated:
          "url('https://media.giphy.com/media/3ohs84asTmM9VC8r5u/giphy.gif')",
        linkBackground: "url('/public/assets/linkBackground.png')",
      },
      colors: {
        softGrey40: "rgba(203, 213, 225, 0.4)",
        softGrey70: "rgba(203, 213, 225, 0.7)",
        aswadBlack: "rgb(24, 24, 30)",
        nightSky: "#15151b",
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
