/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    }
    ,
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      brand: '#846AFF',
      dark: {
        10: '#121214',
        20: '#7C7C8A',
        30: '#EAEAEA',
        40: '#EEEEFF',
        50: '#F8F8FF',
        60: '#FFFFFF'
      }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

