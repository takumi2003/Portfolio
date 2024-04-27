import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/page.tsx",
    "./app/_components/layouts/Footer/Footer.tsx",
    "./features/**/**/**/*.{tsx}",
  ],
  theme: {
    fontFamily: {
      Jersey: ["Jersey, sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
