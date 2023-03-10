/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["bumblebee", "dark", "cmyk"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
