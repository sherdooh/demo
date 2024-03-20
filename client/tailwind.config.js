/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#4d90fe",
        secondary : "#6c88d0",
        dark : {
          hard : "#020133",
          soft : "#275cb3",
          light: "#3d6adb",
        },
      },
      fontFamily : {
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundColor: {
        'custom-color': '#6C88D0',
        'custom-hover-color': '#4E6EA4',
      },
    },
  },
  plugins: [],
}