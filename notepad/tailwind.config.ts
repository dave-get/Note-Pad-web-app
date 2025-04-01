import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "orange-red": "linear-gradient(90deg, #FF4D00 0%, #EC3B3B 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
