import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#333333', 
        Navy: '#071323',
        Caramel: '#8C5C3B',
        CaramelLight: '#B46143',
        CaramelExtraLight: '#A67D5B',
      },
    },
  },
  plugins: [],
};

export default config;
