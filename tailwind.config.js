const plugin = require('tailwindcss/plugin')
module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          'text-shadow': '0.5px 0.5px white',
        },
      })
    }),
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        rubik: ['Rubik Wet Paint', 'cursive'],
      },
    },
  },
}
//font-family: 'Lato', sans-serif;
//font - family: 'Rubik Wet Paint', cursive;
