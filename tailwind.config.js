/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      md:'748px',
      lg:'991px'
    },
    extend: {},
  },
  plugins: [],
}

