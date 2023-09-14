/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "sidebar-gradient":
          "linear-gradient(180deg, #4285F4 0%, #3C83F9 100%);",
      },
      colors: {
        secondary: "#858585",
        background: "#F8FAFF",
        link: "#346BD4",
      },
      dropShadow: {
        card: "3px 4px 11px rgba(98, 98, 98, 0.15)",
      },
      boxShadow: {
        barchart: "4px 4px 20px 0px rgba(0, 0, 0, 0.10)",
        model:
          " 0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 32px 32px -8px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
