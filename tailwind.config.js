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
        blue: '0px 1px 8px cornflowerblue'
      },
      keyframes: {
        textPointer: {
          '0%': {opacity: 0},
          '100%': { opacity: 1},
        }
      },
      animation: {
        textPointer: 'textPointer 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}