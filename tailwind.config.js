/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    // preflight: false,
  },
  theme: {
    extend: {
      colors: {},
    },
    container: {
      padding: '3rem'
    }
  },
  plugins: [],
}

