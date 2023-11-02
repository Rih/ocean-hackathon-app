/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');
export default konstaConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      ios: '',
      material: '',
    },
    extend: {},
  },
  plugins: [],
});

