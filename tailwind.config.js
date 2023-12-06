/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx,css}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['pingfang', 'Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    }
  },
  plugins: []
}
