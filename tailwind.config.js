/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        news: ['"Newsreader"', 'serif'],
        spectral: ['"Spectral"', 'serif'],
        old: ['"Old Standard TT"', 'serif'],
      },
    },
  },
  plugins: [],
}
