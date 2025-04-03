/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2D6BF6',
        'primary-dark': '#2555D2',
        'primary-light': '#4C8BFF',
        'custom-blue': "#0078d4",
        'secondary-background': '#eaeaea',
        'card-background': '#00000003',
        'card-border': '#0000001A'
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};
