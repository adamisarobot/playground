/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {}
  },
  plugins: [formKitTailwind]
};
