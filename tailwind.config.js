/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  corePlugins: {
    // preflight: false,
  },

  theme: {
    extend: {
      colors: {
        'main-blue': '#366bd3',
        'bkup-blue': '#5c8de0'
      },
    },
    container: {
      // padding: '3rem',
    },
  },

  plugins: [],
}

