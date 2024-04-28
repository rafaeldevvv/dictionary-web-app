const {createThemes} = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        background: 'hsl(0 100% 100%)',
        primary: 'hsl(16, 80%, 50%)',
        'contrast-lower': 'hsl(0 0% 96%)',
        'contrast-low': 'hsl(0 0% 66%)',
        'contrast-normal': 'hsl(0 0% 57%)',
        'contrast-high': 'hsl(0 0% 0%)',
      },
      dark: {
        background: 'hsl(0 0% 2%)',
        primary: 'hsl(51, 100%, 50%)',
        'contrast-lower': 'hsl(0 0% 12%)',
        'contrast-low': 'hsl(0 0% 26%)',
        'contrast-normal': 'hsl(0 0% 54%)',
        'contrast-high': 'hsl(0 0% 100%)',
      },
    }, {
      strict: true
    })
  ],
}

