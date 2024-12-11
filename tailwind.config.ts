import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "curious-blue-600": "#0092d8",
        "curious-blue-700": "#016ca3",
        "porcelain-100": "#F1F3F2",
        "alto-200": "#D9D9D9",
        "tuatara-900": "#3A3A3A",
        "alabaster-50": "#FAFAFA",
        "boulder-500": "#767676",
        "big-stone-950": "#1E293B",
        "sunflower-500": "#E8D212",
        "woodsmoke-950": "#191919",
        "silver-chalice-400": "#AFAFAF",
        "black-haze-100": "#F1F3F1",
        "black-haze-200": "#d9ded9",
        "seashell-100": "#F1F1F1",
        "bombay-400": "#ACB1B9",
        "bombay-500": "#9095a1",
        "zumthor-100": "#E2E8F0",
        "link-water-200": "#CBD5E1",
        "gallery-100": "#EFEFEF",
        "black-haze-50": "#F7F8FA",
        "athens-gray-50": "#F1F5F9",
        "athens-gray-100": "#e9eff5",
      },
      backgroundImage: {
        footer: "url('/assets/footer-background.png')",
      },
      boxShadow: {
        premiere: "0px 5px 50px rgba(0, 67, 101, 0.08)",
      },
      screens: {
        xmd: "872px",
        xlg: "1100px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;
