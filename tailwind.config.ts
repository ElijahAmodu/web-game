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
      },
      colors: {
        fill: {
          1: "rgba(255, 255, 255, 0.10)",
        },
        success: {
          100: "#12B76A",
        },
        primary: {
          DEFAULT: "#F70011",
          title: "#3E0635",
        },
        red: {
          25: "#FDB0B5",
          50: "#FED9DB",
          100: "#B9000D",
          150: "#F70011",
          200: "#F700111A",
        },
        pink: {
          25: "#FEE6E7",
        },
        yellow: {
          25: "#FEF9F5",
          100: "#EF8632",
          150: "#EF9A1E",
          200: "#EF9A1E1A",
          300: "#EBA233",
          400: "#FBB32B",
        },
        black: {
          1: "#141415",
          2: "#000000",
          3: "#141415",
          4: "#7B4C4F29",
          5: "#151515CC",
          6: "#7B7B7B29",
          DEFAULT: "#000000",
        },
        gray: {
          25: "#141415",
          50: "#DCD9D9",
          75: "#808080",
          100: "#F1F0F0",
          200: "#9E9EA6",
          300: "#958C8D",
          400: "#FAFAFA",
          500: "#C4BFC0",
          600: "#1E1E20",
          700: "#4A4A4A",
          800: "#1E1E20",
          900: "#272729",
        },
        blue: {
          25: "#101437",
          50: "#1A1F3F",
          100: "#292E54",
          200: "#6435E9",
          300: "#5E6792",
          400: "#282C4F",
          500: "#5B66BA",
          600: "#636C94",
          700: "#15193C",
          800: "#8593C0",
          900: "#1C224A",
          950: "#22264B",
        },
        whine: {
          DEFAULT: "#35191B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
