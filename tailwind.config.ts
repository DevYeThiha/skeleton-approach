import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./comp/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant("abled", "&:not([disabled])");
      addUtilities({

        ".flex-center": {
          "@apply flex justify-center items-center": {},
        },
        ".full-screen": {
          "@apply w-screen h-screen": {},
        },
        ".fixed-screen": {
          "@apply fixed inset-0 full-screen": {},
        },
        ".content-area": {
          "@apply w-full lg:w-[45rem] mx-auto": {},
        },
        ".content-area-lg": {
          "@apply w-full lg:w-[70rem] mx-auto": {},
        },
        ".content-area-sm": {
          "@apply w-full lg:w-[35rem] mx-auto": {},
        },
      });
    }),
  ],
};
export default config;
