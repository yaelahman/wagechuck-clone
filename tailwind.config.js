/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mcyellow: '#FDC62C',
        mcred: '#C40000',
        mcdark: '#27251F'
      }
    },
  },
  plugins: [],
}

