import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      red: "#FF0000",
      "brand-100": "#000000",
      "brand-200": "#048243",
      "neutral-100": "#f5f5f5",
      "neutral-200": "#e4e4e7",
      "neutral-300": "#d4d4d4",
      "neutral-500": "#6b7280",
      "neutral-800": "#262626",
      "neutral-950": "#0a0a0a",
    },
  },
  plugins: [],
};
export default config;
