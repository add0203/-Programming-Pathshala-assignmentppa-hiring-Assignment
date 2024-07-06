/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#4CAF4F",
        brandPrimaryDark: "#3D8C3F",
        neutralDGrey: "#4D4D4D",
        neutralGrey: "#717171",
        neutralSilver: "#F5F7FA",
        gray900: "#18191F",
        neutralBlack: "#263238",
        darkh1: "#E9E9EA",
        darkh2: "#A5A5A5",
        darkbg: "#232323",
        darkbg2: "#111827",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
