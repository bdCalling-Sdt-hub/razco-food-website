/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
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


``