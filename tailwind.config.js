/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        blue: '0px 1px 8px cornflowerblue',
        blueHover: 'cornflowerblue 0px -6px 42px -13px inset, cornflowerblue 0px 12px 26px -18px inset',
        green: '0px 1px 8px green',
        greenHover: 'green 0px -6px 42px -13px inset, green 0px 12px 26px -18px inset',
        red: '0px 1px 8px red',
        redHover: 'red 0px -6px 42px -13px inset, red 0px 12px 26px -18px inset',
        purple: '0px 1px 8px purple',
        purpleHover: 'purple 0px -6px 42px -13px inset, purple 0px 12px 26px -18px inset',
        orange: '0px 1px 8px orange',
        orangeHover: 'orange 0px -6px 42px -13px inset, orange 0px 12px 26px -18px inset',
        yellow: '0px 1px 8px yellow',
        yellowHover: 'yellow 0px -6px 42px -13px inset, yellow 0px 12px 26px -18px inset',
      }
    },
  },
  plugins: [],
}