// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071A2C",
        teal: "#0F766E",
        sky: "#2563EB",
        gold: "#F5B84B",
        soft: "#F7FBFF",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.12)",
        glow: "0 20px 70px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
};