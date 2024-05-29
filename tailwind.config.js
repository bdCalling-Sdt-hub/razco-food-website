/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0 20px",
      screens: {
        "2xl": "1320px",
      }
    },
    extend: {
      colors: {
        primary: "#7CC84E",
        secondary: "#555555",
        base: "#F8F1E6",
      }
    },
  },
  plugins: [],
};


