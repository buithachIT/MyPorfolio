/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dusk-gradient": "linear-gradient(to right, #1a1a1a, #2d2d2d, #1a1a1a)",
      },
      colors: {
        primary: "#0ea5e9", // Sky Blue cho light mode
        darkbg: "#1a1a1a", // Dark background
        darktext: "#ffffff", // White text for dark mode
        darktextSecondary: "rgba(255, 255, 255, 0.7)", // Secondary text with opacity
        accent: "#facc15", // Vàng sáng
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
