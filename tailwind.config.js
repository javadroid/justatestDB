/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primary: "#0187ff",
        primaryDarken: "#0d41d5",
        primaryBlack: "#1f45a3",
        textLight: "#8fa2d1",
        accent: "#ffc727",
        bgLight: "#f1f7fe",
        bgLIght: "#fafdfe",
        bgPrimar: "#e3f0ff",
        // bgGradient: "linear-gradient(180deg, #0d41d5 17.83%, #0187ff)",
        // bgGradient: "linear-gradient(to bottom right, red , blue)",
        black: "#000",
        white: "#fff",
        apiRed: "#ff4382",
        apiRed2: "#d3366a",
        tableGray: "#8f8f8f",
        decorGreen: "#4ccacd",
        success: "#00c09c",
        decorOrange: "#ff9201",
        decorBlue: "#2aabee",
        tg: "#29a9ea",
        yt: "#c4302b",
        boxShadow: "0px 4px 15px rgba(37,39,86,0.15)",
        },
      fontSize: {
        h1Size: "3.6rem",
        h2Size: "2.6rem",
        h3Size: "2.2rem",
        h4Size: "2rem",
        h5Size: "1.8rem",
        h6Size: "1.6rem",
        },
    },
  },
  plugins: [],
}