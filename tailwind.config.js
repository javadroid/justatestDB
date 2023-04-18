/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        "color-primary": "#0187ff",
        "color-primary_darken": "#0d41d5",
        "color-primary_black": "#1f45a3",
        "color-text_light": "#8fa2d1",
        "color-accent": "#ffc727",
        "color-bg_light": "#f1f7fe",
        "color-bg_light-100": "#fafdfe",
        "color-bg_primary-500": "#e3f0ff",
        "color-black": "#000",
        "color-white": "#fff",
        "color-api-red": "#ff4382",
        "color-api-red-700": "#d3366a",
        "color-table_gray": "#8f8f8f",
        "color-decor_green": "#4ccacd",
        "color-success": "#00c09c",
        "color-decor_orange": "#ff9201",
        "color-decor_blue": "#2aabee",
        "color-tg": "#29a9ea",
        "color-yt": "#c4302b",
      },
      dropShadow: {
        "3xl": "0px 4px 15px rgba(37,39,86,0.15)",
      },
      fontSize: {
        h1Size: "3.6rem",
        h2Size: "2rem",
        h3Size: "2.2rem",
        h4Size: "2rem",
        h5Size: "1.8rem",
        h6Size: "1.6rem",
      },
    },
  },
  plugins: [],
};
