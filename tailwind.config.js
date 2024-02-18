const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors:{
    },
    fontSize:{
      fsTitle: "3rem",
      fsSubtitle: "1.5rem",
      fsText: "1rem"
    },

  },
  darkMode: "class",
  plugins: [nextui()]
}

