/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    'fontFamily': {
      'playpen': ['Playpen Sans', 'cursive']
    },

    screens: {
      supxsm: '320px',
      sups: '375px',
      xsm: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

  },
  plugins: [],
}