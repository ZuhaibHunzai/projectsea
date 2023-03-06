/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "520px",
      },
      fontSize: {
        "10xl": "10rem",
        "12xl": [
          "12rem",
          {
            lineHeight: "1",
          },
        ],
      },
      fontFamily: {
        // oswald: "'Oswald', sans-serif",
        // "space-mono": "'Space Mono', monospace;",
      },
      colors: {
        "sea-white-100": "#ffffff",
        "sea-white-200": "#f5f5f5",
        "sea-white-300": "#efefef",
        "sea-red-400": "#ff4143",
        "sea-red-500": "#b32e2f",
        "sea-natural-400": "#888888",
        "sea-natural-500": "#222222",
        "sea-natural-600": "#111111",
      },
      width: {
        "2x96": "48rem",
      },
    },
  },
  plugins: [],
};
