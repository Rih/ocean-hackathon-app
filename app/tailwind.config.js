/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');
export default konstaConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  // extend primary color
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff864b',
          DEFAULT: '#ff6b22',
          dark: '#f85200',
        },
      },
    },
  },
  plugins: [],
});

